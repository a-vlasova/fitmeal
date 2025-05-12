'use client';

import { useStore } from '@/lib/store';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import Button from '../UI/Button';
import { IoMdClose } from 'react-icons/io';
import CartItem from './CartItem';
import { useEffect } from 'react';

const Cart = () => {
  const { cart, isCartOpen, openCart, closeCart, loadCart } = useStore();

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  return (
    <>
      <button className="flex items-center gap-1" onClick={openCart}>
        <HiOutlineShoppingBag />
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-fitmealRed text-white text-sm font-bold">
          {cart.totalQuantity}
        </span>
      </button>

      <div
        className={`fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-50 z-50 ${
          isCartOpen ? 'block' : 'hidden'
        }`}
        onClick={closeCart}
      >
        <div
          className={`absolute top-0 right-0 w-[420px] max-w-[100vw] h-screen bg-[#f4f8ec] pb-7 shadow-md text-base ${
            isCartOpen
              ? 'transform-none animate-slideIn'
              : 'translate-x-full animate-slideOut'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative px-7 pt-7 pb-6 border-b border-gray-300">
            <h5 className="text-fitmealGreen text-center m-0">Your Cart</h5>
            <button
              className="absolute block top-1/2 left-5 -translate-y-1/2"
              onClick={closeCart}
            >
              <IoMdClose size={26} />
            </button>
          </div>
          {cart.totalQuantity > 0 && (
            <>
              {cart.lines.edges.map((item) => (
                <CartItem item={item.node} key={item.node.id} />
              ))}
              <div className="px-10">
                <div className="text-right text-lg font-bold mb-5">
                  Total: ${cart.cost.totalAmount.amount}
                </div>
                <Button
                  href={cart.checkoutUrl}
                  size="lg"
                  color="green"
                  className="block w-full"
                >
                  Checkout
                </Button>
              </div>
            </>
          )}
          {cart.totalQuantity === 0 && (
            <p className="text-center text-lg mt-4">Your cart is empty.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
