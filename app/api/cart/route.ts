import { shopifyFetch } from '@/lib/actions';
import { getCartQuery } from '@/lib/queries';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookiesStore = await cookies();
  const cart = cookiesStore.get('shopifyCartId')?.value;

  let query = '';
  if (cart) {
    query = `
      {
        cart(id: "${cart}") 
        ${getCartQuery}
      }
    `;
  } else {
    query = `
      mutation CreateCart {
        cartCreate {
          cart ${getCartQuery}
        }
      }
    `;
  }

  try {
    const { data, error } = await shopifyFetch(query);

    if (error) {
      throw new Error('Failed to get cart');
    }

    const cartData = cart ? data.cart : data.cartCreate.cart;

    if (!cart) {
      cookiesStore.set('shopifyCartId', cartData.id, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 14,
      });
    }

    return NextResponse.json(cartData, { status: 200 });
  } catch (error) {
    console.error('Error getting cart:', error);
    return NextResponse.json(error, { status: 500 });
  }
}
