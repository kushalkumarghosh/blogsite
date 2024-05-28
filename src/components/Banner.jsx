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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit pariatur facere? Harum iure excepturbeatae at ducimus eos illo sed dolorem, aperiam quidem minima eius explicabo accusantium nihil perferendis dignissimos? Quia accusantium commodi inventore molestiae nulla necessitatibus rerum, ipsa explicabo iure blanditiis voluptate.
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
