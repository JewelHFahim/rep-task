import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenuUnfold,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Shop",
      url: "/shop",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className=" px-16 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-3xl font-bold text-blue-800">R</span>
            <span className="text-gray-600">epliq</span>
          </Link>

          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 text-xl"
              aria-label="toggle menu"
            >
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenuUnfold />}
            </button>
          </div>
        </div>

        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 flex flex-col lg:flex-row 
          ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "opacity-0 -translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            {menus.map((menu, i) => (
              <Link
                to={menu.url}
                key={i}
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                {menu.title}
              </Link>
            ))}
          </div>

          <div className="flex justify-center md:block">
            <Link
              className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
              to="/cart"
            >
              <AiOutlineShoppingCart className="text-xl" />
              <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
