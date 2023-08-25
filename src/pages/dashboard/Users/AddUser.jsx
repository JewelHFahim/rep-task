import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { usePostUserMutation } from "../../../redux/features/api/apiSlice";
import SubmitBtn from "../../../utils/SubmitBtn";
import BackBtn from "../../../utils/BackBtn";
import { adduser_input } from "../../../utils/SomeClass";

const AddUser = () => {
  const [postUser] = usePostUserMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const form = event.target;
    postUser(data);
    console.log(data);
    toast.success("Added User");
    form.reset();
    navigate("/dashboard/users");
  };

  const inputFields = [
    {
      label: "User Name",
      type: "text",
      field: "name",
      error: errors.field,
    },
    {
      label: "User Email",
      type: "email",
      field: "email",
      error: errors.field,
    },
    {
      label: "Phone Number",
      type: "number",
      field: "phone",
      error: errors.field,
    },
    {
      label: "User Role",
      type: "text",
      field: "role",
      error: errors.field,
    },
    {
      label: "Image Link",
      type: "text",
      field: "image",
      error: errors.field,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 h-screen py-12">
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
                  className={adduser_input}
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
          <Link to="/dashboard/users">
            <BackBtn />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AddUser;
