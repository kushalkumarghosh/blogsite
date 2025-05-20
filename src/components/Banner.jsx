import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-gray-400 mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-sung font-bold mb-5">
          Welcome to My Blog
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
          Welcome to my blog! Here, you'll find a diverse mix of articles, insights, and stories on topics ranging from travel and lifestyle to technology and personal growth. Join me as we explore new ideas, share experiences, and engage in meaningful conversations. Your journey starts here!
        </p>
        <div>
          <Link
            to="/"
            className="font-medium hover:text-zinc-500 inline-flex items-center py-1"
          >
            Learn more
            <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
