import img1 from "../../assets/team.jpg";
import { RiFileList3Fill } from "react-icons/ri";
import { TbClockHour4 } from "react-icons/tb";
import { FaUserAlt, FaUserFriends } from "react-icons/fa";

const About = () => {

  const datas = [
    {
      icon: <RiFileList3Fill />,
      total: 2097,
      title: "Projects and Plans",
    },
    {
      icon: <FaUserFriends />,
      total: 3590,
      title: "Helped people",
    },
    {
      icon: <FaUserAlt />,
      total: 94,
      title: "Volunteer",
    },
    {
      icon: <TbClockHour4 />,
      total: 100,
      title: "Timing",
    },
  ];

  return (
    <div>
      <section className="py-10 lg:py-20 bg-stone-100  dark:bg-gray-900">
        <div className=" mx-auto py-4 lg:py-6 px-2 md:px-6 lg:px-[5%]">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                  <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                    Who we are?
                  </span>
                  <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                    About Us
                  </h1>
                </div>
                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam Lorem ipsum dolor sit amet.
                </p>

                <div className="grid grid-cols-2 gap-5">
                  {datas.map((data, i) => (
                    <div
                      key={i}
                      className="w-full sm:w-1/2 md:w-1/2 shadow-md shadow-slate-600 rounded-md"
                    >
                      <div className="p-4 bg-white dark:bg-gray-900 rounded-md">
                        <span className="text-blue-500 dark:text-blue-400 text-4xl">
                          {data.icon}
                        </span>
                        <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                          {data.total}
                        </p>
                        <h2 className="text-sm text-gray-700 dark:text-gray-400">
                         {data.title}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 relative object-cover rounded overflow-hidden z-40">
              <img src={img1} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
