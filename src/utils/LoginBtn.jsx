import { BiLogIn } from "react-icons/bi";

const LoginBtn = ({children}) => {
  return (
    <>
      <button className="flex items-center text-sm px-1 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        <BiLogIn />
        <span className="mx-1">{children}</span>
      </button>
    </>
  );
};

export default LoginBtn;
