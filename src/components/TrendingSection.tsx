import Pagination from "./Pagination";
import TrendingCard from "./TrendingCard";

const TrendingSection = () => {
  const trendingArticles = [
    {
      id: 1,
      title: "Dolore magna aliqua",
      excerpt:
        "Lorem ipsum dolor sit amet, ipsum labore fuisuis mei id, ad has appareat.",
      time: "2m",
      imageSrc: "/images/hero.jpg",
    },
    {
      id: 2,
      title: "Morbi eleifend a libero",
      excerpt:
        "Lorem ipsum dolor sit amet, ipsum labore fuisuis mei id, ad has appareat.",
      time: "1h",
      imageSrc: "/images/hero.jpg",
    },
    {
      id: 3,
      title: "Morbi eleifend a libero",
      excerpt:
        "Lorem ipsum dolor sit amet, ipsum labore fuisuis mei id, ad has appareat.",
      time: "3h",
      imageSrc: "/images/hero.jpg",
    },
  ];

  return (
    <section className="py-10 px-6 bg-gray-100">
      <div className="container mx-auto">
        <Pagination title="TRENDING" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingArticles.map((article) => (
            <TrendingCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
