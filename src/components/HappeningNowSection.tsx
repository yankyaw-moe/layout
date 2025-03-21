import Pagination from "./Pagination";
import LargeArticleCard from "./LargeArticleCard";
import SmallArticleCard from "./SmallArticleCard";

const HappeningNowSection = () => {
  return (
    <section className="py-10 px-6 bg-gray-100">
      <div className="container mx-auto">
        <Pagination title="HAPPENING NOW" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <LargeArticleCard
              title="Large article title"
              excerpt="Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam."
              time="2m"
              imageSrc="/images/golden-bridge.jpg"
              category="CITY"
            />

            <LargeArticleCard
              title="Large article title"
              excerpt="Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam."
              time="2m"
              imageSrc="/images/hero.jpg"
              category="TRAVEL"
            />
          </div>
          <div className="lg:col-span-1">
            <SmallArticleCard
              title="Small title"
              time="3h"
              imageSrc="/images/hero.jpg"
              author="Worldnews"
            />

            <SmallArticleCard
              title="Small title"
              time="4h"
              imageSrc="/images/golden-bridge.jpg"
              author="Days"
            />

            <SmallArticleCard
              title="Small title"
              time="3h"
              imageSrc="/images/hero.jpg"
              author="Monica"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappeningNowSection;
