'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { useRef } from 'react';
import { PlanCardType } from '@/lib/types';
import PlanCard from '../UI/PlanCard';

type PlanSliderProps = {
  data: {
    node: PlanCardType;
  }[];
};

const PlanSlider = ({ data }: PlanSliderProps) => {
  const slider = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative z-20 -mt-[30px] md:-mt-[50px] lg:-mt-[80px] max-w-[1440px] mx-auto overflow-hidden">
      <Slider ref={slider} {...settings} className="plan-slider">
        {data.map((plan) => (
          <div className="px-5" key={plan.node.handle}>
            <PlanCard planData={plan.node} />
          </div>
        ))}
      </Slider>
      <button
        onClick={() => slider?.current?.slickPrev()}
        className="absolute z-20 top-1/2 left-7 transform -translate-y-1/2"
      >
        <BsArrowLeft size={24} />
      </button>
      <button
        onClick={() => slider?.current?.slickNext()}
        className="absolute z-20 top-1/2 right-7 transform -translate-y-1/2"
      >
        <BsArrowRight size={24} />
      </button>
    </div>
  );
};

export default PlanSlider;
