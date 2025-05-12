'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiSolidQuoteAltRight } from 'react-icons/bi';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    text: 'As a busy professional, I struggle to find time to prepare healthy meals. This service has been a lifesaver! The meals are perfectly portioned, balanced, and super convenient. I can focus on my work without worrying about what to eat for lunch or dinner. It’s not just about convenience—it’s about eating good, clean food that makes me feel great!',
    name: 'John',
    img: '/team-02-275x275.jpg',
  },
  {
    id: 2,
    text: 'I’ve tried several meal delivery services, but this one truly stands out. The meals are fresh, flavorful, and packed with the nutrients I need to fuel my workouts. I love that the menu changes weekly, so I never get bored, and I don’t have to worry about making bad choices. It’s a game-changer for my fitness routine and overall health!',
    name: 'Sarah',
    img: '/team-05-275x275.jpg',
  },
  {
    id: 3,
    text: 'I’ve always been passionate about eating clean, but I struggled to maintain it with my hectic schedule. Since I started using this delivery service, I’ve been able to stay on track with my health goals without the stress of meal planning and prep. The variety is amazing, and every dish feels like a treat—without the guilt. Highly recommend it to anyone looking to eat healthier and save time!',
    name: 'Emily',
    img: '/team-03-275x275.jpg',
  },
];

const Reviews = () => {
  const settings = {
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="py-14 lg:py-24 text-center bg-fitmealGreen bg-opacity-10">
      <h4 className="font-subHeaders font-normal mb-0 text-fitmealGreen text-[40px]">
        Testimonials
      </h4>
      <h2 className="mb-10">What our clients say</h2>
      <Slider {...settings} className="plan-slider max-w-[1200px] mx-auto">
        {reviews.map((review) => (
          <div key={review.id} className="px-4 md:px-10 lg:px-32">
            <BiSolidQuoteAltRight
              size={72}
              className="text-fitmealGreen mx-auto mb-5"
            />
            {review.text}
            <Image
              src={review.img}
              alt={review.name}
              width={80}
              height={80}
              className="rounded-full mx-auto mt-7 mb-2"
            />
            <span className="font-bold text-lg">{review.name}</span>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Reviews;
