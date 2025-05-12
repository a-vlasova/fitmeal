import Image from 'next/image';
import { IoCheckmark } from 'react-icons/io5';
import Button from '../UI/Button';

const listItems = [
  'Reduces weight',
  'Exact calorie content',
  'Improves health',
  'No sugar and gluten',
  'Adds strength and energy',
];

const HomeAboutSection = () => {
  return (
    <section className="py-12 md:py-20 xl:py-24">
      <div className="container flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap md:justify-center md:gap-10 xl:gap-20 items-center gap-8">
        <div className="text-center xl:text-left basis-content xl:basis-5/12">
          <h2>
            Healthy and tasty foods with
            <span className="text-fitmealGreen"> natural ingredients</span>
          </h2>
          <p className="px-3 xl:px-0">
            Our meals are made with the freshest, healthiest ingredients to
            nourish your body and delight your taste buds. We carefully select
            locally sourced produce and lean proteins to ensure maximum flavor
            and nutrition. Experience the difference of real, wholesome food
            delivered right to your doorstep.
          </p>
          <Button href="#select-menu" color="red" size="lg" className="mt-8">
            Get Menu
          </Button>
        </div>
        <Image
          src="/health-bottle-cut.jpg"
          alt=""
          width={351}
          height={409}
          className="max-w-[250px] lg:max-w-[270px]"
        />
        <ul className="">
          {listItems.map((item) => (
            <li
              key={item}
              className="mb-2 xl:mb-5 text-lg flex items-center gap-2"
            >
              <IoCheckmark size={24} className="text-fitmealGreen" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeAboutSection;
