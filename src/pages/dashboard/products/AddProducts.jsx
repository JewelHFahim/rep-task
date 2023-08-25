import { useForm } from "react-hook-form";
import { usePostProductMutation } from "../../../redux/features/api/apiSlice";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SubmitBtn from "../../../utils/SubmitBtn";
import BackBtn from "../../../utils/BackBtn";

const AddProducts = () => {
  const [postProduct] = usePostProductMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    const form = event.target;
    postProduct(data);
    console.log(data);
    toast.success("Added Product");
    form.reset();
    navigate("/dashboard");
  };

  const inputFields = [
    {
      label: "Product Title",
      type: "text",
      field: "title",
      error: errors.field,
    },
    {
      label: "Category",
      type: "text",
      field: "category",
      error: errors.field,
    },
    {
      label: "Price",
      type: "text",
      field: "price",
      error: errors.field,
    },
    {
      label: "Quantity",
      type: "number",
      field: "quantity",
      error: errors.field,
    },
    {
      label: " Image Link",
      type: "text",
      field: "image",
      error: errors.field,
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
                  {...register(item.field, { required: true })}
                  type={item.title}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {item.error && <span>This field is required</span>}
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
            <BackBtn>To Products</BackBtn>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AddProducts;
