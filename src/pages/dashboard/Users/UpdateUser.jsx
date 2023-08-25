import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetSingleUserQuery, useUpdateUserMutation } from "../../../redux/features/api/apiSlice";
import SubmitBtn from "../../../utils/SubmitBtn";
import BackBtn from "../../../utils/BackBtn";
import { sigin_input_style } from "../../../utils/SomeClass";

const UpdateUser = () => {
  const { id } = useParams();
  const [updateUser] = useUpdateUserMutation();
  const { data: user } = useGetSingleUserQuery(id);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const form = event.target;

    const res = await updateUser({ id, data });
    console.log(res);
    form.reset();
    navigate("/dashboard/users");
  };

  const inputFields = [
    {
      label: "User Name",
      type: "text",
      field: "name",
      default: user?.name,
    },
    {
      label: "User Email",
      type: "email",
      field: "email",
      default: user?.email,
    },
    {
      label: "Phone",
      type: "number",
      field: "phone",
      default: user?.phone,
    },
    {
      label: "Rule",
      type: "text",
      field: "role",
      default: user?.role,
    },
    {
      label: "Image Link",
      type: "text",
      field: "image",
      default: user?.image,
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
          <Link to="/dashboard/users" >
            <BackBtn>Back To Users</BackBtn>
          </Link>
        </div>

      </section>
    </div>
  );
};

export default UpdateUser;
