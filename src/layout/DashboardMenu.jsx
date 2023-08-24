import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import logo from "../assets/logo.png";
import { MdOutlineDashboard } from "react-icons/md";
import { BiShieldQuarter } from "react-icons/bi";
import { BsBoxes } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../redux/features/menu/menuSlice";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
// import { addLogout } from "../../../redux/feature/userSlice";

const DashboardMenu = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };

  const menus = [
    {
      icon: <MdOutlineDashboard />,
      title: "Dashboard",
      url: "/dashboard"
    },
    {
      icon: <FiPlus />,
      title: "Add Product",
      url: "/dashboard"
    },
    {
      icon: <BsBoxes />,
      title: "All Products",
      url: "/dashboard/allproducts"
    },
    {
      icon: <FaUsers />,
      title: "Users",
      url: "/dashboard"
    },
    {
      icon: <AiFillSetting />,
      title: "Profile",
      url: "/dashboard"
    },
    {
      icon: <BiShieldQuarter />,
      title: "Others",
      url: "/dashboard"
    },
    
  ];

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={handleToggleDrawer}
        direction="left"
        E
        className=""
      >
        <div>
          <aside className="flex flex-col w-64 h-screen px-4 py-6 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <a href="#" className="flex items-end text-3xl">
              <span className="font-bold text-blue-600">R</span>
              <span className="text-slate-500">eplic</span>
            </a>

            <div className="flex flex-col justify-between flex-1 mt-6">
              {/* Menus */}

              <nav className="flex flex-col gap-y-3">
                {menus.map((menu, i) => (
                  <Link
                    key={i}
                    className="flex items-center px-4 py-2 text-gray-300 bg-slate-80 border-b border-slate-800"
                    to={menu.url}
                  >
                    <span className="text-lg">{menu.icon}</span>
                    <span className="mx-4 font-medium">{menu.title}</span>
                  </Link>
                ))}
              </nav>

              <div className="h-[160px] bg-[#F6F6F6] dark:bg-slate-800 rounded-[24px] flex flex-col items-center text-[#3F3F44]">
                <div className="w-[71px] h-[71px] bg-[#F6F6F6] rounded-full mt-[-35px] flex justify-center items-center">
                  <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                    <img src={logo} alt="" className="w-[37px] h-[21px]" />
                  </div>
                </div>

                <h1 className="text-lg font-semibold text-slate-700 dark:text-slate-400">
                  Admin Name
                </h1>

                <div className="w-[160px] h-[40px] rounded-lg bg-slate-700 flex justify-center items-center mt-[30px]">
                  <button
                    // onClick={()=>dispatch(addLogout())}
                    className="text-[14px] text-slate-200 font-[700]"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Drawer>
    </>
  );
};

export default DashboardMenu;
