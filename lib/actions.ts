'use server';

import { cookies } from 'next/headers';
import { getCartQuery } from './queries';
import { profileSchema } from './zod';
import { redirect } from 'next/navigation';
import { ZodError } from 'zod';

function renderError(error: any) {
  if (error instanceof ZodError) {
    return {
      message: error.issues.map((issue) => issue.message).join(' '),
    };
  } else if (error instanceof Error) {
    return { message: error.message };
  }
  return { message: 'there was an error...' };
}

export async function shopifyFetch(query: string, variables = {}) {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!domain) {
    throw new Error('Missing Shopify domain in .env');
  }

  if (!key) {
    throw new Error('Missing Shopify Storefront Access Token in .env');
  }

  try {
    const result = await fetch(`https://${domain}/api/2025-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
      },
      body: JSON.stringify({ query, variables }),
    });

    const body = await result.json();

    if (body.errors) {
      throw new Error(body.errors[0].message);
    }

    return {
      status: result.status,
      data: body.data,
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      status: 500,
      error: 'Error receiving data',
    };
  }
}

export async function addToCart(variantId: string) {
  const cookiesStore = await cookies();
  const cartId = cookiesStore.get('shopifyCartId')?.value;

  return await shopifyFetch(
    `mutation {
      cartLinesAdd(
        cartId: "${cartId}"
        lines: {
          merchandiseId: "${variantId}"
          quantity: 1
        }
      ) {
        cart ${getCartQuery}
      }
    }`
  );
}

export async function addToCartWithUserData(
  prevState: { message: string },
  formData: FormData
) {
  let checkoutUrl = '';
  try {
    const rawData = Object.fromEntries(formData);
    const validatedData = profileSchema.parse(rawData);

    const cookiesStore = await cookies();
    const cartId = cookiesStore.get('shopifyCartId')?.value;

    async function addToCart() {
      return shopifyFetch(
        `mutation {
          cartLinesAdd(
            cartId: "${cartId}"
            lines: {
              merchandiseId: "${validatedData.plan}"
              quantity: 1
            }
          ) {
            cart ${getCartQuery}
          }
        }`
      );
    }

    async function updateUserInfo() {
      return shopifyFetch(
        `mutation {
          cartBuyerIdentityUpdate(
            cartId: "${cartId}"
            buyerIdentity: {
              email: "${validatedData.email}"
            }
          ) {
            cart ${getCartQuery}
          }
        }`
      );
    }

    const [addToCartResult] = await Promise.all([
      addToCart(),
      updateUserInfo(),
    ]);
    checkoutUrl = addToCartResult.data.cartLinesAdd.cart.checkoutUrl;
  } catch (error) {
    return renderError(error);
  }
  redirect(checkoutUrl);
}

export async function updateCartLine(cartLineId: string, quantity: number) {
  const cookiesStore = await cookies();
  const cartId = cookiesStore.get('shopifyCartId')?.value;

  return await shopifyFetch(
    `mutation {
      cartLinesUpdate(
        cartId: "${cartId}"
        lines: {
          id: "${cartLineId}"
          quantity: ${quantity}
        }
      ) {
        cart ${getCartQuery}
      }
    }`
  );
}
