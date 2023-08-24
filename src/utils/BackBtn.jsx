import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const BackBtn = ({ children }) => {
  return (
    <>
      <button className="text-bold text-lg text-blue-800 flex items-center gap-2">
        <HiOutlineArrowNarrowLeft className="text-xl" /> Back To Pooducts
      </button>
    </>
  );
};

export default BackBtn;
