import HappeningNowSection from "@/components/HappeningNowSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import TrendingSection from "@/components/TrendingSection";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Hero />
        </div>
        <div className="lg:col-span-1">
          <NewsSection />
        </div>
      </div>
      <TrendingSection />
      <HappeningNowSection />
    </main>
  );
}
