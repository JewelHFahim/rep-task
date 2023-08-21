import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/features/api/apiSlice";

const Home = () => {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <div className="bg-white dark:bg-gray-900 font-poppins">
      Home
      <div className="mx-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
        {data?.data?.map((product) => (
          <div
            key={product._id}
            className="flex flex-col items-center justify-center w-full max-w-sm mx-auto "
          >
            <div className="w- h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
              <img
                src={product.image}
                alt=""
                className="w-full h-full object-fit rounded-t-lg"
              />
            </div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                {product.productName}
              </h3>

              <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">
                  $129
                </span>

                <Link to={`product/${product._id}`}>
                  <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Details
                  </button>
                </Link>

                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
