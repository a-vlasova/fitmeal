import HeroSection from '@/components/UI/HeroSection';
import PlanCard from '@/components/UI/PlanCard';
import { shopifyFetch } from '@/lib/actions';
import { PlanCardType } from '@/lib/types';

const MealPlansPage = async () => {
  const { data } = await shopifyFetch(`{
    products(first: 100) {
      edges {
        node {
          handle
          title
          metafields(identifiers: [
            { namespace: "custom", key: "calories_low" },
            { namespace: "custom", key: "calories_high" },
            { namespace: "custom", key: "card_image" }
          ]) {
            namespace
            key
            value
            reference {
              ... on MediaImage {
                image {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  }`);

  return (
    <>
      <HeroSection title="Meal Plans" />
      <section className="py-10 xl:py-20">
        <div className="container grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-y-8">
          {data.products.edges.map((plan: { node: PlanCardType }) => (
            <PlanCard key={plan.node.handle} planData={plan.node} />
          ))}
        </div>
      </section>
    </>
  );
};

export default MealPlansPage;
