import { Link, useParams } from "react-router-dom";
import BackBtn from "../../../utils/BackBtn";
import { useGetSingleUserQuery } from "../../../redux/features/api/apiSlice";
import { TfiEmail } from 'react-icons/tfi';
import { MdAddIcCall, MdOutlineControlCamera } from "react-icons/md";


const ViewDetails = () => {

    const { id } = useParams();
  const { data: user } = useGetSingleUserQuery(id);
    
  return (
    <div className=" flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-800">

      <div className="w-full max-w-sm mt- overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-700">
        <img
          className="object-cover object-center w-full h-58"
          src={user?.image}
          alt="avatar"
        />

        <div className="flex items-center px-6 py-3 bg-gray-900">
          <h1 className="mx-3 text-lg font-semibold text-white">{user?.name}</h1>
        </div>

        <div className="px-6 py-4">

          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <TfiEmail/>
            <h1 className="px-2 text-sm">{user?.email}</h1>
          </div>

          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <MdAddIcCall/>
            <h1 className="px-2 text-sm">{user?.phone}</h1>
          </div>

          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <MdOutlineControlCamera/>

            <h1 className="px-2 text-sm">{user?.role}</h1>
          </div>
        </div>
      </div>

      <div className="font-bold">
          <Link to="/dashboard/users" >
            <BackBtn>Back To Users</BackBtn>
          </Link>
        </div>

    </div>
  );
};

export default ViewDetails;
