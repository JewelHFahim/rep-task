import { useSelector } from "react-redux";
import SummeryCard from "../../components/SummeryCard";
import ColumnChart from "../../components/charts/ColumnChart";
import RadialChart from "../../components/charts/RadialChart";
import ProductTable from "../../components/tables/ProductTable";

const Dashboard = () => {
  const { isOpen } = useSelector((state) => state.menu);

  return (
    <section
      className={`${
        isOpen ? "pl-[250px]" : "px-[5%]"
      } bg-white dark:bg-gray-900 flex lg:block flex-col justify-center items-center gap-y-5 overflow-hidden`}
    >
      <SummeryCard />

      <div className="flex flex-col lg:flex-row  items-center gap-4">
        <div className="lg:w-[60%]">
          <ColumnChart />
        </div>
        <div className="lg:w-[40%]">
          <RadialChart />
        </div>
      </div>

      <ProductTable />
    </section>
  );
};

export default Dashboard;
