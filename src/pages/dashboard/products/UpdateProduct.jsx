import { useForm } from "react-hook-form";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../../redux/features/api/apiSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackBtn from "../../../utils/BackBtn";
import SubmitBtn from "../../../utils/SubmitBtn";
import { sigin_input_style } from "../../../utils/SomeClass";

const UpdateProduct = () => {
  const { id } = useParams();
  const [updateProduct] = useUpdateProductMutation();
  const { data: product } = useGetSingleProductQuery(id);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const form = event.target;
    const res = await updateProduct({ id, data });
    console.log(res);
    form.reset();
    navigate("/dashboard/allproducts");
  };

  const inputFields = [
    {
      label: "Product Title",
      type: "text",
      field: "title",
      default: product?.title,
    },
    {
      label: "Category",
      type: "text",
      field: "category",
      default: product?.category,
    },
    {
      label: "Price",
      type: "text",
      field: "price",
      default: product?.price,
    },
    {
      label: "Quantity",
      type: "number",
      field: "quantity",
      default: product?.quantity,
    },
    {
      label: " Image Link",
      type: "text",
      field: "image",
      default: product?.image,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 h-screen pt-12">
      <section className="w-2/3 p-6 m-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add Products
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {inputFields.map((item, i) => (
              <div key={i}>
                <label className="text-gray-700 dark:text-gray-200">
                  {item.label}
                </label>
                <input
                  {...register(item.field)}
                  defaultValue={item.default}
                  type={item.title}
                  className={sigin_input_style}
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <SubmitBtn>Add</SubmitBtn>
          </div>
        </form>

        <div className="w-1/3">
          <Link to="/dashboard/allproducts">
            <BackBtn>Back To Products</BackBtn>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UpdateProduct;
