import AddToCartButton from './AddToCartButton';
import { Product } from '@/lib/types';

const OrderPlanSection = ({ data }: { data: Product }) => {
  let caloriesLow, caloriesHigh;

  for (const item of data.metafields) {
    if (item.key === 'calories_low') {
      caloriesLow = item.value;
    } else if (item.key === 'calories_high') {
      caloriesHigh = item.value;
    }
  }

  return (
    <section className="py-[80px] md:pt-[100px] md:pb-[110px] text-center">
      <div className="container max-w-[1000px]">
        <h2 className="text-fitmealGreen">
          {caloriesLow}
          {caloriesLow && caloriesHigh && '-'}
          {caloriesHigh} <span className="text-[30px]">kkal per day</span>
        </h2>
        <p className="md:text-lg px-[15px]">{data.description}</p>
        <div className="mt-8 mb-12 font-headers font-bold">
          from&nbsp;
          <span className="text-2xl text-fitmealRed">
            ${data.priceRange.minVariantPrice.amount}
          </span>
          /week
        </div>
        <AddToCartButton mealPlan={data} color="red" size="lg">
          Order now
        </AddToCartButton>
      </div>
    </section>
  );
};

export default OrderPlanSection;
