export const getCartQuery = `
  {
    id
    checkoutUrl
    totalQuantity
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              image {
                url
              }
              unitPrice {
                amount
              }
              product {
                title
              }
            }
          }
        }
      }
    }
    cost {
      totalAmount {
        amount  
      }
    }
  }
`;

export const addProductToCartMutation = `
  mutation {
    cartLinesUpdate(
      cartId: "gid://shopify/Cart/Z2NwLXVzLWV4YW1wbGU6MDEyMzQ1Njc4OTAxMjM0NTY3ODkw?key=examplekey1234567890"
      lines: {
        id: "gid://shopify/CartLine/1"
        quantity: 3
      }
    ) 
  }
`;

export const productQuery = `{
    id
    handle
    title
    description
    featuredImage {
      url
    }
    priceRange {
      minVariantPrice {
        amount
      }
    }
    variants(first: 1) {
      edges {
        node {
          id
        }
      }
    }
    metafields(identifiers: [
      { namespace: "custom", key: "calories_low" },
      { namespace: "custom", key: "calories_high" },
      { namespace: "custom", key: "card_image" },
    ]) {
      namespace
      key
      value
      reference {
        ... on MediaImage {
          image {
            url
            altText
          }
        }
      }
    }
  }
}`;
