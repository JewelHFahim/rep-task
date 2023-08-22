import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const datas = [
    {
      icon: <BsTwitter />,
    },
    {
      icon: <FaLinkedinIn />,
    },
    {
      icon: <FaFacebookF />,
    },
    {
      icon: <AiFillInstagram />,
    },
  ];

  return (
    <div>
      <section className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container px-[12%] py-10 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-10">
            <div className="lg:w-1/2 lg:mx-10">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                Let’s talk
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Ask us everything and we would love to hear from you
              </p>

              <form className="mt-12">
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  get in touch
                </button>
              </form>
            </div>

            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
              <div className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-52 h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <HiOutlineLocationMarker className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />

                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    Lalmatia, Dhaka-1215, BD
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <MdCall className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />

                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    (257) 563-7401
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <FiMail className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />

                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    replic@gmail.com
                  </span>
                </p>
              </div>

              <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>

                <div className="flex mt-4 -mx-1.5 ">
                  {datas.map((data, i) => (
                    <Link
                      key={i}
                      className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500 text-[22px]"
                    >
                      {data.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
