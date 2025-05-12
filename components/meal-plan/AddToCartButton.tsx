'use client';

import Button, { ButtonProps } from '../UI/Button';
import { ReactNode } from 'react';
import { useStore } from '@/lib/store';
import { Product } from '@/lib/types';

type AddToCartButtonProps = {
  mealPlan: Product;
  children: ReactNode;
} & ButtonProps;

const AddToCartButton = ({
  mealPlan,
  children,
  ...props
}: AddToCartButtonProps) => {
  const { addToCart, openCart } = useStore();

  return (
    <Button
      onClick={async () => {
        await addToCart(mealPlan);
        openCart();
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AddToCartButton;
