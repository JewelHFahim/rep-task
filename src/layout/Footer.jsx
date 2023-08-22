import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900  border-slate-700 shadow-lg shadow-slate-600 dark:shadow-slate-100">
        <div className="p-6 mx-auto">

          <div className=" lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <Link to="/" className="text-2xl font-bold">
                  <span className="text-3xl font-bold text-blue-800">R</span>
                  <span className="text-gray-600">epliq</span>
                </Link>

                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                  Lalmatia, Dhaka
                </p>

                <div className="flex mt-6 -mx-2">
                  <a
                    href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Facebook"
                  >
                    <BsFacebook />
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-800 dark:hover:text-blue-400"
                    aria-label="Facebook"
                  >
                    <AiFillInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    About
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Company
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    community
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Careers
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Blog
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Tec
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Music
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Videos
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Products
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Laptop
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Processor
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Motherboard
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Contact
                  </h3>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    +1 526 654 8965
                  </span>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    repliq@email.com
                  </span>
                </div>
              </div>
            </div>

          </div>

          <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

          <div>
            <p className="text-center text-gray-500 dark:text-gray-400">
              © Repliq 2023 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
