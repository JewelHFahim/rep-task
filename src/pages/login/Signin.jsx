import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.png";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  usePostUserMutation,
} from "../../redux/features/api/apiSlice";
import { addUser } from "../../redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import login from "../../assets/Login.jpg";
import { sigin_input_style } from "../../utils/SomeClass";

const Signin = () => {
  // const {data: users} = useGetUsersQuery();
  const [postUser] = usePostUserMutation();
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const form = event.target;

    const userinfo = {
      name: data.name,
      email: data.email,
      image: data.image,
      phone: phone,
      password: data.password,
      role: "user",
    };
    postUser(userinfo);
    // dispatch(addUser(userinfo));
    console.log(userinfo);

    toast.success("Added Product");
    form.reset();
    navigate("/");
  };

  return (
    <section>
      <div className="flex w-full h-screen mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="hidden bg-cover lg:block lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80"
            alt=""
          />
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>

          {/* google */}
          <a
            href="#"
            className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="px-4 py-2 text-xl">
              <FcGoogle />
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </a>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or signup with email
            </a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Name */}
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className={sigin_input_style}
                type="text"
              />
              {errors.name && (
                <span className="text-xs text-red-300">Name Required</span>
              )}
            </div>

            {/* Email */}
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                className={sigin_input_style}
                type="email"
              />
              {errors.email && (
                <span className="text-xs text-red-300">Email Required</span>
              )}
            </div>

            {/* Image */}
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Image Link
              </label>
              <input
                {...register("image", { required: true })}
                className={sigin_input_style}
                type="text"
              />
              {errors.image && (
                <span className="text-xs text-red-300">
                  Image Link Required
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Phone Number
              </label>

              <PhoneInput
                country={"bd"}
                enableSearch={true}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>

            {/* Password */}
            <div className="mt-4">
              <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Password
                </label>
              </div>

              <input
                {...register("password", { required: true })}
                className={sigin_input_style}
                type="password"
              />
              {errors.password && (
                <span className="text-xs text-red-300">Password Required</span>
              )}
            </div>

            {/* Submit Buttun */}
            <div className="mt-2">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>

            
          </form>

          <div className="flex items-center justify-between mt-">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <a
              href="/login"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or log in
            </a>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
