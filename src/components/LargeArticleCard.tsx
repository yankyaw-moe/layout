import Image from "next/image";

interface LargeArticleCardProps {
  title: string;
  excerpt: string;
  time: string;
  imageSrc: string;
  category?: string;
}

const LargeArticleCard = ({
  title,
  excerpt,
  time,
  imageSrc,
  category,
}: LargeArticleCardProps) => {
  return (
    <div className="relative h-[400px] w-full mb-6 overflow-hidden">
      <Image src={imageSrc} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      {category && (
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 text-xs uppercase font-medium">
          {category}
        </div>
      )}

      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm mb-3 text-gray-200">{excerpt}</p>
        <div className="flex items-center text-xs text-gray-300">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
            </svg>
          </span>
          {time} ago
        </div>
      </div>
    </div>
  );
};

export default LargeArticleCard;
