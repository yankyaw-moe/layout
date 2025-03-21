import NewsCard from "./NewsCard";
import Pagination from "./Pagination";

const NewsSection = () => {
  return (
    <div className="p-6">
      <Pagination title="MORE NEWS" />
      <NewsCard
        category="TRAVEL"
        title="Article title"
        excerpt="Lorem ipsum dolor sit amet, ipsum labore fuisuis mei id, ad has appareat..."
        time="2 min"
      />

      <NewsCard
        category="TECHNOLOGY"
        title="Article title"
        excerpt="Lorem ipsum dolor sit amet, ipsum labore fuisuis mei id, ad has appareat..."
        time="2 min"
      />
    </div>
  );
};

export default NewsSection;
