import HomeAboutSection from '@/components/homepage/HomeAboutSection';
import HomeBenefits from '@/components/homepage/HomeBenefits';
import HomeHero from '@/components/homepage/HomeHero';
import HomePlans from '@/components/homepage/HomePlans';
import OrderFormSection from '@/components/homepage/OrderFormSection';
import PlanSlider from '@/components/homepage/PlanSlider';
import Reviews from '@/components/homepage/Reviews';
import { shopifyFetch } from '@/lib/actions';
import { productQuery } from '@/lib/queries';

const HomePage = async () => {
  const { data } = await shopifyFetch(`{
    products(first: 10) {
      edges {
        node ${productQuery}
    }
  }`);

  return (
    <>
      <HomeHero />
      {data && <PlanSlider data={data.products.edges} />}
      <HomeAboutSection />
      <HomeBenefits />
      {data && <HomePlans data={data.products.edges} />}
      <Reviews />
      <OrderFormSection />
    </>
  );
};

export default HomePage;
