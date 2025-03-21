const Pagination = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <div className="flex space-x-2">
        <button className="flex items-center justify-center text-gray-500 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </button>
        <button className="flex items-center justify-center text-gray-500 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
