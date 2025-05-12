import { FaRegClock } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import OrderForm from './OrderForm';
import { shopifyFetch } from '@/lib/actions';

const OrderFormSection = async () => {
  const { data } = await shopifyFetch(`{
    products(first: 100) {
      edges {
        node {
          id
          title
          variants(first: 1) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }`);

  return (
    <div className="pt-16 pb-[80px] md:py-[100px] lg:py-[120px]">
      <div className="container lg:flex lg:justify-between lg:gap-8 xl:gap-[50px] max-w-[1150px]">
        <div className="px-[15px] md:px-20 lg:w-1/2 lg:max-w-[550px] lg:p-0">
          <h2 className="text-center lg:text-left">
            <span className="text-fitmealGreen">Order free</span> food delivery
            every day at your convenience
          </h2>
          <p className="text-center lg:text-left">
            From 8 to 10 in the morning. Delivery is free. Outside the city
            Shipping costs $5. Delivery days are Monday, Tuesday, Wednesday,
            Thursday, Friday, Saturday.
          </p>
          <div className="font-bold text-lg mt-[30px]">
            <div className="flex items-center justify-center mb-[30px] lg:justify-start">
              <FaRegClock size={40} className="text-fitmealGreen mr-[15px]" />
              <span className="w-[230px]">Every day from 8:00 to 12:00</span>
            </div>
            <a
              href="tel:+49260-5731-08"
              className="flex items-center justify-center lg:justify-start"
            >
              <FiPhoneCall
                size={40}
                className="text-fitmealGreen mr-[15px] lg:justify-start"
              />
              <span className="w-[230px]">+49260-5731-08</span>
            </a>
          </div>
        </div>
        <div className="mt-16 lg:mt-0 lg:w-1/2 max-w-[500px] mx-auto lg:mx-0">
          <OrderForm menuData={data} />
        </div>
      </div>
    </div>
  );
};

export default OrderFormSection;
