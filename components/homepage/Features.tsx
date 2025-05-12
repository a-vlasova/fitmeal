import Image from 'next/image';

const data = [
  {
    title: 'Only natural food',
    description: 'We only use natural ingredients in our meals.',
    image: '/natural.png',
  },
  {
    title: 'Various dishes',
    description: 'We offer a wide range of dishes to choose from.',
    image: '/dishes.png',
  },
  {
    title: 'Handy packaging',
    description: 'Our meals are packed in a way that makes them easy to carry.',
    image: '/packaging.png',
  },
  {
    title: 'No frying',
    description: 'We do not fry our meals, so they are healthier.',
    image: '/not-frying.png',
  },
];

const Features = () => {
  return (
    <ul className="flex justify-center flex-col gap-9 md:gap-[5%] xl:gap-9 md:flex-row md:flex-wrap xl:flex-nowrap text-center">
      {data.map((item) => (
        <li
          key={item.title}
          className="relative md:w-[45%] xl:w-[270px] md:mb-8 xl:mb-0 before:content-[''] before:hidden xl:before:block before:h-[1px] before:w-[80px] before:bg-gray-300 before:absolute before:top-[50px] before:-right-[18px] before:translate-x-1/2 last:before:hidden"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={100}
            height={100}
            className="w-[100px] h-[100px] mx-auto mb-5 lg:mb-[28px]"
          />
          <h4 className="mb-3 lg:text-xl">{item.title}</h4>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Features;
