
const NextBtn = ({children}) => {
    return (
        <div
          className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        >
          {children}
        </div>
    );
};

export default NextBtn;