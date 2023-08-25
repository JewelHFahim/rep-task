import { RiFileList2Line } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { FiEye, FiMail } from "react-icons/fi";
import { useGetProductsQuery, useGetUsersQuery } from "../redux/features/api/apiSlice";

const SummeryCard = () => {

  const { data: products} = useGetProductsQuery();
  const { data: users} = useGetUsersQuery();

  const datas = [
    {
      title: "Total Products",
      total: products?.data?.length,
      icon: <BsBoxSeam />,
      bgcolor: "#68ae00",
    },
    {
      title: "Registered Users",
      total: users?.data?.length,
      icon: <RiFileList2Line />,
      bgcolor: "#fc8213",
    },
    {
      title: "Daily Visitors",
      total: 83,
      icon: <FiEye />,
      bgcolor: "#337ab7",
    },
    {
      title: "New Messages",
      total: 1,
      icon: <FiMail />,
      bgcolor: "#17A589",
    },
  ];

  return (
    <section className="w-full">
      <div className="py-8 mx-auto w-full">

        <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Summary
        </h2>

        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center w-full">
          {datas.map((item, i) => (
            <div
              key={i}
              className={`w-[70vw] md:w-full  text-center flex items-center justify-around py-5 text-white`}
              style={{ background: `${item.bgcolor}` }}
            >
              <div>
                <h1 className="text-4xl font-semibold">{item.total}</h1>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>

              <div className={`text-5xl bg-white p-2 rounded-full text-[${item.bgcolor}] `}
              style={{ color: `${item.bgcolor}` }}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SummeryCard;
