import { Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";
import DashboardNav from "./DashboardNav";

const DashboardLayout = () => {
  return (
    <div>
      <DashboardNav />
      <DashboardMenu />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
