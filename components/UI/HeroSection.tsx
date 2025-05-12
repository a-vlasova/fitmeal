import Image from 'next/image';
import Breadcrumbs from './Breadcrumbs';

type HeroSectionProps = {
  title: string;
  image?: string;
};

const HeroSection = ({
  title,
  image = 'https://cdn.shopify.com/s/files/1/0689/9102/5333/files/01_menu_slimming_py88g4.jpg?v=1740578636',
}: HeroSectionProps) => {
  return (
    <section className="relative h-[400px] flex justify-center items-center">
      <div className="relative z-20 container text-center text-white">
        <h1 className="text-5xl md:text-6xl">{title}</h1>
        <Breadcrumbs pageTitle={title} />
      </div>
      <div className="absolute w-full h-full top-0 left-0">
        <Image src={image} alt={title} fill className="object-cover" priority />
        <div className="relative z-10 w-full h-full bg-fitmealBlack bg-opacity-50"></div>
      </div>
    </section>
  );
};

export default HeroSection;
