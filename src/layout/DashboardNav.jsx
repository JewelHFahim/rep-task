import { useState } from "react";
import { CgClose, CgMenuGridR } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "../redux/features/menu/menuSlice";

const DashboardNav = () => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };

  return (
    <nav
      className="bg-slate-100 dark:bg-slate-800 w-full md:border-0 md:static"
    >
      <div className="w-full flex justify-between items-center px-5 py-2 lg:md-4  lg:px-10">
        <div className="flex items-center justify-between w-full">
          <a href="/" className="flex items-end text-4xl">
            <span className="font-bold text-blue-600">R</span>
            <span className="text-slate-500">eplic</span>
          </a>

          <div className="md:hidden" onClick={() => setState(!state)}>
            <button
              onClick={handleToggleDrawer}
              className="text-gray-400 outline-none p-1 text-2xl rounded-md focus:border-gray-600 focus:border"
            >
              {state ? <CgClose /> : <CgMenuGridR />}
            </button>
          </div>
        </div>

        <div className="hidden md:inline-block">
          <button
            onClick={handleToggleDrawer}
            className="py-2 px-4 text-white bg-slate-600 hover:bg-slate-700 rounded-md shadow"
          >
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
