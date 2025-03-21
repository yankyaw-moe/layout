import Image from "next/image";

interface TrendingCardProps {
  title: string;
  excerpt: string;
  time: string;
  imageSrc: string;
}

const TrendingCard = ({
  title,
  excerpt,
  time,
  imageSrc,
}: TrendingCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-48 w-full mb-4 overflow-hidden">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <h3 className="font-medium text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{excerpt}</p>
      <div className="flex items-center text-xs text-gray-400">
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
          </svg>
        </span>
        {time} ago
      </div>
    </div>
  );
};

export default TrendingCard;
