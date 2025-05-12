'use client';

import { useStore } from '@/lib/store';
import { CartItem as CartItemType } from '@/lib/types';
import Image from 'next/image';

const CartItem = ({ item }: { item: CartItemType }) => {
  const { updateQuantity } = useStore();

  const handleIncrementQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrementQuantity = () => {
    updateQuantity(item.id, item.quantity - 1);
  };

  return (
    <div className="flex items-start mb-5 py-4 px-4 md:px-5 gap-2 md:gap-5 border-b border-gray-300">
      <div className="relative w-[50px] h-[50px]">
        {item.merchandise.image && (
          <Image
            src={item.merchandise.image.url}
            alt={item.merchandise.product.title}
            sizes="50px"
            fill
            className="object-cover"
          />
        )}
      </div>
      <div>
        <h6 className="text-lg">{item.merchandise.product.title}</h6>
      </div>
      <div className="flex items-center gap-2 ml-auto mr-0">
        <button
          onClick={() => handleDecrementQuantity()}
          className="flex items-center justify-center pb-1 w-5 h-5 bg-fitmealGreen rounded-full text-white leading-none align-top text-2xl"
        >
          -
        </button>
        <span className="font-bold">{item.quantity}</span>
        <button
          onClick={() => handleIncrementQuantity()}
          className="flex items-center justify-center w-5 h-5 bg-fitmealGreen rounded-full text-white leading-none align-top font-bold"
        >
          +
        </button>
      </div>
      <div className="text-lg font-bold min-w-[60px] text-right">
        ${item.cost.totalAmount.amount}
      </div>
    </div>
  );
};

export default CartItem;
