import { create } from 'zustand';
import { Cart, Product } from './types';
import { devtools } from 'zustand/middleware';
import { addToCart, updateCartLine } from './actions';

type Store = {
  cart: Cart;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  loadCart: () => void;
  addToCart: (item: Product) => void;
  updateQuantity: (cartLineId: string, quantity: number) => void;
};

export const useStore = create<Store>()(
  devtools((set) => ({
    cart: {
      id: '',
      checkoutUrl: '',
      totalQuantity: 0,
      lines: [],
      cost: {
        totalAmount: {
          amount: 0,
        },
      },
    },
    isCartOpen: false,
    openCart: () => set({ isCartOpen: true }),
    closeCart: () => set({ isCartOpen: false }),
    loadCart: async () => {
      const response = await fetch('/api/cart');
      const data = await response.json();
      set((state) => ({
        ...state,
        cart: data,
      }));
    },
    addToCart: async (item: Product) => {
      const { status, data } = await addToCart(item.variants.edges[0].node.id);
      set((state) => {
        if (status !== 200) {
          console.error('Failed to add item to cart:', data);
          return state;
        }

        const cart = data.cartLinesAdd.cart;
        return {
          ...state,
          cart,
        };
        //     cartLinesUpdate(
        //       cartId: "gid://shopify/Cart/Z2NwLXVzLWV4YW1wbGU6MDEyMzQ1Njc4OTAxMjM0NTY3ODkw?key=examplekey1234567890"
        //       lines: {
        //         id: "gid://shopify/CartLine/1"
        //         quantity: 3
        //       }
        //     )
        //   }`
        // );
        // const existingItem = state.lines.find(
        //   (i) => i.merchandise.id === item.variantId
        // );
        // if (existingItem) {
        //   const quantity = existingItem.quantity + 1;
        //   const price = roundPrice(
        //     existingItem.cost.totalAmount.amount +
        //       existingItem.cost.amountPerQuantity.amount
        //   );
        //   return {
        //     ...state,
        //     lines: state.lines.map((i) =>
        //       i.merchandise.id === item.variantId
        //         ? {
        //             ...i,
        //             quantity,
        //             cost: {
        //               ...i.cost,
        //               totalAmount: {
        //                 amount: price,
        //               },
        //             },
        //           }
        //         : i
        //     ),
        //     totalQuantity: state.totalQuantity + 1,
        //     totalPrice: roundPrice(state.totalPrice + price),
        //   };
        // }
        // const price = getPlanTotalPrice(item.dayPrice, '1-week');
        // return {
        //   ...state,
        //   lines: [
        //     ...state.lines,
        //     {
        //       plan: item,
        //       quantity: 1,
        //       price,
        //       period: '1-week',
        //     },
        //   ],
        //   totalPrice: roundPrice(state.totalPrice + price),
        //   totalQuantity: state.totalQuantity + 1,
        // };
      });
    },
    updateQuantity: async (cartLineId: string, quantity: number) => {
      const { status, data } = await updateCartLine(cartLineId, quantity);
      set((state) => {
        if (status !== 200) {
          console.error('Failed to update quantity:', data);
          return state;
        }

        const cart = data.cartLinesUpdate.cart;
        return {
          ...state,
          cart,
        };
      });
    },
  }))
);
