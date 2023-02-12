import { MdDeleteForever } from "react-icons/md";
import {
  useDeleteTransactionMutation,
  useGetAllTransactionsQuery,
} from "../../../redux/slices/apiSlice";

import ExpenseInfo from "./ExpenseInfo.jsx";
const Expenses = () => {
  // const [balanceInfo, setBalanceInfo] = useState(false);
  const { data: user } = JSON.parse(localStorage.getItem("user"));
  const [deleteTransaction] = useDeleteTransactionMutation();
  const {
    data: expenses,
    isLoading,
  } = useGetAllTransactionsQuery(user.userId);

  if (isLoading)
    return (
      <div className="p-10 w-full overflow-y-scroll max-h-96 flex justify-center items-center font-bold font-serif">{`Loading...`}</div>
    );
  if (expenses === undefined)
    return (
      <div className="bg-red-300 font-serif p-10 w-full flex flex-col justify-center items-center font-bold  ">
        {/* <p>{error.data.message}</p> */}
        <p>Make Transactions Now</p>
      </div>
    );

  console.log(expenses);

  return (
    <div className="p-10 w-full flex flex-col    ">
     <ExpenseInfo expenses={expenses} />
      <div className=" mt-20 flex items-center scrollbar-thumb-transparent scrollbar-thin  scrollbar-track-transparent overflow-y-scroll justify-center flex-col ">
        {!expenses
          ? "No transactions Initiated"
          : expenses
              ?.filter((exp) => exp !== null && exp !== "")
              .map((expense, index) => {
                return (
                  <div
                    key={index}
                    className={`bg-white flex gap-3 px-3 py-3  justify-between items-center border-l-8 mb-5 w-full ${
                      expense.type === "income"
                        ? "border-green-500"
                        : "border-red-500"
                    } shadow-md`}
                  >
                    <span>{expense?.title}</span>
                    <span>
                      {expense?.type === "income" ? "credited ₹" : "debited ₹"}{" "}
                      {expense.amount}
                    </span>
                    <span>{expense?.createdAt.substring(0, 10)}</span>
                    {expense?.type === "income" ? (
                      <button
                        disabled={true}
                        className="py-2 px-3bg-transparent rounded text-transparent"
                      ></button>
                    ) : (
                      <button
                        className="py-2 px-3 bg-red-500 rounded text-white "
                        onClick={() => {
                          deleteTransaction(expense?._id);
                        }}
                      >
                        <MdDeleteForever />
                      </button>
                    )}
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default Expenses;
