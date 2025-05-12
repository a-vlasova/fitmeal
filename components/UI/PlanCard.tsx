import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import { PlanCardType } from '@/lib/types';

type PlanCardProps = { planData: PlanCardType };

const PlanCard = ({ planData }: PlanCardProps) => {
  let caloriesLow, caloriesHigh, cardImage;

  for (const item of planData.metafields) {
    if (item.key === 'calories_low') {
      caloriesLow = item.value;
    } else if (item.key === 'calories_high') {
      caloriesHigh = item.value;
    } else if (item.key === 'card_image') {
      cardImage = item.reference?.image.url;
    }
  }

  return (
    <Link
      href={`/plans/${planData.handle}`}
      className="block relative overflow-hidden py-10 pl-32 pr-5 lg:py-[65px] lg:pl-40 bg-[#f3f5ed] rounded-3xl group"
    >
      {cardImage && (
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] lg:w-[230px] lg:h-[230px] flex items-center justify-center bg-[url('/meal_shadow.png')] bg-contain lg:transition lg:group-hover:-translate-x-[42%] lg:duration-500">
          <Image
            src={cardImage}
            alt={planData.title}
            width={270}
            height={270}
            className="w-full h-full"
          />
        </div>
      )}
      <div>
        <h4 className="mb-0 lg:text-2xl">{planData.title}</h4>
        {(caloriesLow || caloriesHigh) && (
          <p className="text-fitmealGreen font-bold text-lg">
            {caloriesLow}
            {caloriesLow && caloriesHigh && '-'}
            {caloriesHigh} kkal
          </p>
        )}
        <Button color="red" size="sm" className="mt-8">
          Learn More
        </Button>
      </div>
    </Link>
  );
};

export default PlanCard;
