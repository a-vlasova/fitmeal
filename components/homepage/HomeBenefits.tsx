import Image from 'next/image';
import Features from './Features';

const HomeBenefits = () => {
  return (
    <section className="relative pt-12 pb-44 md:pb-52 xl:pb-80 lg:pt-20 text-center bg-fitmealGreen bg-opacity-10 overflow-hidden">
      <div className="container px-7">
        <h4 className="m-0 font-subHeaders text-fitmealGreen text-[40px] font-normal">
          Our benefits
        </h4>
        <h2>Why customers choose us</h2>
        <p className="mb-10 xl:mb-14 xl:mx-24">
          Enjoy the convenience of nutritious meals delivered right to your
          door, saving you time and effort. Our chef-crafted dishes are made
          with fresh, wholesome ingredients to keep you feeling energized and
          satisfied.
        </p>
        <Features />
      </div>
      <Image
        src="/plate_rounded.jpg"
        alt=""
        width={1330}
        height={1330}
        className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] xl:w-[1330px] xl:h-[1330px] left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[70%] xl:translate-y-[80%]"
      />
    </section>
  );
};

export default HomeBenefits;
