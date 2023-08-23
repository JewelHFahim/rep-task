import { useState } from "react";
import { useGetProductsQuery } from "../../redux/features/api/apiSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductTable = () => {
  const { data } = useGetProductsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([])

  const productsPerPage = 10;
  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const visibleProducts = data?.data?.slice(startIndex, endIndex);
    setProducts(visibleProducts)
  }, [currentPage, data?.data]);

  return (
    <div className="w-full mx-auto px-4 md:px-8 mt-4 lg:mt-12">
      <div className="justify-between flex">
        <h1 className="text-xl text-slate-600 dark:text-slate-300 font-semibold">
          All Products
        </h1>
        <div className=" md:mt-0">
          <Link to="/dashboard/addproduct"
          
            className="inline-block px-3 py-1 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            + Add Product
          </Link>
        </div>
      </div>

      <div className="mt-4 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Product Name</th>
              <th className="py-3 px-6">Category</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Sale</th>
              <th className="py-3 px-6">Quantity</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-slate-300 divide-y">
            {
            // data?.data?

            products?.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                  <img
                    src={item.image}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <span> {item.title}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.price} tk</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {Number(item.price) + Number(item.price) * 0.2} tk
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.quantity}
                </td>

                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="javascript:void()"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button
                    href="javascript:void()"
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center my-4">
      <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        >
          Previous
        </button>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
