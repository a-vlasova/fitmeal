import { ReactNode } from 'react';
import Tabs from '../UI/Tabs';
import Image from 'next/image';
import Button from '../UI/Button';
import AddToCartButton from '../meal-plan/AddToCartButton';
import { Product } from '@/lib/types';

type HomePlansProps = {
  data: {
    node: Product;
  }[];
};

const createTabContent = (
  data: HomePlansProps['data']
): [titles: string[], tabContent: ReactNode[]] => {
  const tabContent: ReactNode[] = [];
  const titles: string[] = [];

  for (const dataItem of data) {
    const planData = dataItem.node;
    let caloriesLow, caloriesHigh;

    for (const item of planData.metafields) {
      if (item.key === 'calories_low') {
        caloriesLow = item.value;
      } else if (item.key === 'calories_high') {
        caloriesHigh = item.value;
      }
    }

    titles.push(planData.title);
    tabContent.push(
      <div
        key={planData.handle}
        className="py-10 lg:flex lg:items-center lg:gap-10"
      >
        <div className="relative w-full lg:w-[495px] h-[55vw] lg:h-[340px] mb-7">
          {planData.featuredImage && (
            <Image
              src={planData.featuredImage.url}
              alt={planData.featuredImage.altText || planData.title}
              fill
              sizes="495px 340px"
              className="object-cover rounded-2xl"
              style={{ backgroundColor: '#f0f0f0' }}
            />
          )}
        </div>
        <div className="lg:text-left flex-1">
          <h4 className="mb-2">{planData.title}</h4>
          <div className="mb-4 text-lg text-fitmealGreen font-bold">
            {caloriesLow}
            {caloriesLow && caloriesHigh && '-'}
            {caloriesHigh} kkal
          </div>
          <p>{planData.description}</p>
          <div className="mt-5 font-headers font-bold text-lg">
            <span className="text-fitmealRed text-2xl">
              ${planData.priceRange.minVariantPrice.amount}
            </span>
            /week
          </div>
          <div className="flex flex-col md:flex-row md:justify-center lg:justify-start gap-4 mt-5 xl:mt-7">
            <AddToCartButton mealPlan={planData} color="red" size="lg">
              Order Now
            </AddToCartButton>
            <Button href={`/plans/${planData.handle}`} color="green" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return [titles, tabContent];
};

const HomePlans = ({ data }: HomePlansProps) => {
  const [titles, tabContent] = createTabContent(data);

  return (
    <section
      className="py-14 xl:py-[86px] bg-[url('/plans-bg.png')] bg-fitmealGreen"
      id="select-menu"
    >
      <div className="container max-w-[92%] lg:max-w-[1170px] pt-10 xl:pt-16 pb-3 md:px-10 xl:px-[70px] bg-white rounded-2xl">
        <h4 className="font-subHeaders text-center text-fitmealGreen font-normal text-[40px] mb-0">
          Nutrition plans
        </h4>
        <h2 className="mb-8 xl:mb-12 text-center text-3xl xl:text-5xl">
          Choose Your Nutrition
        </h2>
        <Tabs tabTitles={titles} tabContent={tabContent} />
      </div>
    </section>
  );
};

export default HomePlans;
