import Features from '@/components/homepage/Features';
import OrderFormSection from '@/components/homepage/OrderFormSection';
import OrderSection from '@/components/meal-plan/OrderPlanSection';
import HeroSection from '@/components/UI/HeroSection';
import { shopifyFetch } from '@/lib/actions';
import { productQuery } from '@/lib/queries';
import { notFound } from 'next/navigation';

type Params = Promise<{ handle: string }>;

const PlanPage = async (props: { params: Params }) => {
  const params = await props.params;
  const { handle } = params;

  const { status, data } = await shopifyFetch(`{
    product(handle: "${handle}") ${productQuery}`);

  if (status !== 200) {
    notFound();
  }

  const product = data.product;

  return (
    <>
      <HeroSection title={product.title} image={product.featuredImage.url} />
      <OrderSection data={product} />
      <section className="py-12 md:pt-[64px] md:pb-6 lg:py-16 bg-fitmealGreen bg-opacity-10">
        <div className="container">
          <Features />
        </div>
      </section>
      <OrderFormSection />
    </>
  );
};

export default PlanPage;
