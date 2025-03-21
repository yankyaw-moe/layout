import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[500px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        {/* Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 text-white max-w-2xl">
        <h2 className="uppercase text-lg font-medium mb-2">World News</h2>
        <div className="w-16 h-0.5 bg-white mb-6"></div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Amazing places in America to visit.
        </h1>
        <p className="text-sm md:text-base mb-8 opacity-90">
          For some reason — this country, this city, this neighborhood, this
          particular street — is the place you are living a majority of your
          life in.
        </p>

        <div>
          <Link
            href="/learn-more"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white text-sm uppercase font-medium py-2 px-6 rounded-sm transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
