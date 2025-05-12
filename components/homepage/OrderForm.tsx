'use client';

import { addToCartWithUserData } from '@/lib/actions';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Select from '../UI/Select';
import { useActionState } from 'react';

type Product = {
  node: {
    id: string;
    title: string;
    variants: { edges: { node: { id: string } }[] };
  };
};

const initState = {
  message: '',
};

const OrderForm = ({
  menuData,
}: {
  menuData: { products: { edges: Product[] } };
}) => {
  const [formState, formAction] = useActionState(
    addToCartWithUserData,
    initState
  );

  return (
    <form
      action={formAction}
      className="flex flex-col gap-6 px-5 py-10 md:p-[60px] rounded-3xl bg-[url('/form-corn-bg-1.png')] bg-fitmealGreen"
    >
      <Input type="text" placeholder="Your name" name="name" />
      <Input type="email" placeholder="Your email" name="email" />
      <Select defaultValue="" name="plan">
        <option value="" disabled>
          Nutrition plan
        </option>
        {menuData.products.edges.map(
          (product: {
            node: {
              id: string;
              title: string;
              variants: { edges: { node: { id: string } }[] };
            };
          }) => (
            <option
              key={product.node.id}
              value={product.node.variants.edges[0].node.id}
            >
              {product.node.title}
            </option>
          )
        )}
      </Select>
      <Button color="red" size="lg" className="w-full">
        Get menu
      </Button>
      {formState.message && (
        <p className="text-white text-center">{formState.message}</p>
      )}
    </form>
  );
};

export default OrderForm;
