import { Link } from "react-router-dom";
import AddExpense from "./Components/AddExpense";
import Expenses from "./Components/Expenses";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) =>
    state.user ? state.user[0] : state.user
  );
  return (
    <div className="flex flex-col" >
      {user !== null ? (
        <>
          <div className="flex flex-col lg:flex-row mt-10 lg:mt-0 h-screen" >
            <AddExpense />
            <Expenses />
          </div>
        </>
      ) : (
        <div className="flex  justify-center items-center h-screen w-screen   ">
          <div className="flex border p-32 bg-[#ffffff38] backdrop-blur-lg shadow-md justify-center items-center flex-col gap-8 ">
            <h1 className="text-center text-3xl font-bold ">
              Login To Expense Track
            </h1>
            <Link
              to="/login"
              type="button"
              className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
