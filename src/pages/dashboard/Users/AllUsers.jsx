import { useState } from "react";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../../redux/features/api/apiSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import PrevBtn from "../../../utils/PrevBtn";
import NextBtn from "../../../utils/NextBtn";
import { deleteBtn, view_edit } from "../../../utils/SomeClass";
import { useSelector } from "react-redux";

const AllUsers = () => {
  const { data } = useGetUsersQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [deleteUser] = useDeleteUserMutation();
  const {phone} = useSelector((state)=> state.user)

  const productsPerPage = 25;

  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const visibleProducts = data?.data?.slice(startIndex, endIndex);
    setUsers(visibleProducts);
  }, [currentPage, data?.data]);

  const handleDelete = (id) => {
    const res = deleteUser(id);
    toast.error("Deleted");
    console.log(res);
  };

  // useEffect( ()=> {
  //   try {
  //     const existing = users.find(
  //       (user) => user?.phone  === phone);
  
  //     if (existing) {
  //       console.log('User logged in successfully');
  //     } else {
  //       console.log('Invalid phone number');
  //     }
  //   } catch (error) {
  //     console.error('Error authenticating user:', error);
  //   }
  // },[users])


  return (
    <div className="w-full min-h-screen h-full mx-auto px-4 md:px-8 pt-4 lg:py-12 bg-white dark:bg-gray-900">

      <div className="flex justify-center  gap-10">
        <h1 className="text-xl text-slate-600 dark:text-slate-300 font-semibold">
          Total Listed Users: {users?.length}
        </h1>

        <div className="md:mt-0">
          <Link
            to="/dashboard/adduser"
            className="inline-block px-3 py-1 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            + Add User
          </Link>
        </div>
      </div>

      <div className="mt-4 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className=" bg-gray-300 dark:bg-gray-700 dark:text-gray-200  font-medium border-b">
            <tr>
              <th className="py-3 px-6">User Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Phone</th>
              <th className="py-3 px-6">Role</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-900 dark:text-slate-300 divide-y">
            {users?.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                  <img
                    src={item.image}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                  <span> {item.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.email}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.phone}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.role}
                </td>
           
                <td className="text-right px-6 whitespace-nowrap">
                  
                  <Link to={`/dashboard/userdetails/${item?._id}`} className={view_edit}>
                    View
                  </Link>

                  <Link
                    to={`/dashboard/updateuser/${item?._id}`}
                    className={view_edit}
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(item?._id)}
                    className={deleteBtn}
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center my-4">
        <button onClick={() => setCurrentPage(currentPage - 1)}>
          <PrevBtn>Previous</PrevBtn>
        </button>

        <button onClick={() => setCurrentPage(currentPage + 1)}>
          <NextBtn>Next</NextBtn>
        </button>
      </div>

    </div>
  );
};

export default AllUsers;
