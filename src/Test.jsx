import { useGetUsersQuery } from "./redux/features/api/apiSlice";
import { useSelector } from "react-redux";

const Test = () => {
  const { data: users } = useGetUsersQuery();

  const { role } = useSelector((state) => state.user);

  return (
    <div>
      {users?.data?.map((item, i) => (
        <p key={i}> {item.phone}</p>
      ))}

      <div>{role === "admin" ? <p>Admin</p> : <p>User</p>}</div>
    </div>
  );
};

export default Test;
