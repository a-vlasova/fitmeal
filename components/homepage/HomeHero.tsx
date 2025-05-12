import Image from 'next/image';
import Button from '../UI/Button';

const HomeHero = () => {
  return (
    <section className="relative h-[500px] xl:h-[650px] flex justify-center items-center">
      <div className="relative z-20 container max-w-[1000px] text-center text-white">
        <h1 className="text-5xl lg:text-7xl">Healthy Food Delivery</h1>
        <p className="text-lg">
          Fuel your body with delicious, nutritious meals delivered right to
          your doorstep. Our chef-crafted dishes are made from the freshest
          ingredients, tailored to your lifestyle, and designed to keep you
          feeling your best. No prep. No stress. Just wholesome goodness.
        </p>
        <Button href="/plans" color="red" size="lg" className="mt-10">
          View Plans
        </Button>
      </div>
      <div className="absolute w-full h-full top-0 left-0">
        <Image src="/home-hero.jpg" alt="" fill className="object-cover" />
        <div className="relative z-10 w-full h-full bg-fitmealBlack bg-opacity-70"></div>
      </div>
    </section>
  );
};

export default HomeHero;
