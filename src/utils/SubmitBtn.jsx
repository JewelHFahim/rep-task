
const SubmitBtn = ({children}) => {
  return (
    <>
      <button
        type="submit"
        className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      >
        {children}
      </button>
    </>
  );
};

export default SubmitBtn;
