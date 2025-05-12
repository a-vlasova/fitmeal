import { DELIVERY_PERIODS } from './constants';

export type DeliveryPeriod = (typeof DELIVERY_PERIODS)[number];

export type FormState = {
  message: string;
};

export type ActionFunction = (
  prevState: FormState,
  formData: FormData
) => Promise<FormState>;

export type SignInFunction = () => Promise<void>;

export type PlanCardType = {
  handle: string;
  title: string;
  metafields: {
    namespace: string;
    key: string;
    value: string;
    reference?: {
      image: {
        url: string;
        altText: string;
      };
    };
  }[];
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
  featuredImage: {
    altText: string;
    url: string;
  };
  variants: {
    edges: {
      node: {
        id: string;
      };
    }[];
  };
  metafields: {
    namespace: string;
    key: string;
    value: string;
  }[];
};

export type CartItem = {
  id: string;
  quantity: number;
  cost: {
    totalAmount: {
      amount: number;
    };
    amountPerQuantity: {
      amount: number;
    };
  };
  merchandise: {
    id: string;
    title: string;
    image: {
      url: string;
    };
    unitPrice: {
      amount: number;
    };
    product: {
      title: string;
    };
  };
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  lines: {
    edges: {
      node: CartItem;
    }[];
  };
  cost: {
    totalAmount: {
      amount: number;
    };
  };
};
