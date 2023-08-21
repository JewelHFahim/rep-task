import {  useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../redux/features/api/apiSlice";
import { AiFillStar } from "react-icons/ai";

const ProductDetails = () => {
    const { id } = useParams();

  const { data } = useGetSingleProductQuery(id);



  return (
    <section>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src={data?.image}
              alt=""
            />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">

              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                {data?.productName}
              </h1>

              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.
              </p>

              <h3 className="my-6 text-lg font-medium text-blue-500">
                Price: {data?.price} TK(BDT)
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
              status: {data?.status}
              </p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center gap-x-1">
              Rating: {data?.rating} <AiFillStar/>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductDetails;
