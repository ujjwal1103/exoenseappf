import { useAddTransactionMutation } from "../../../redux/slices/apiSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { schema } from "../../../utility/expenseSchema";
const AddExpense = () => {
  const { data: user } = JSON.parse(localStorage.getItem("user"));
  const { handleSubmit, register,  formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [addTransaction] = useAddTransactionMutation();
 
  
 
  console.log(errors)


  const HandleClick = async (data) => {
    
    const expense = { ...data, userId : user.userId}
    await addTransaction(expense);
    console.log(expense);
  };
  return (
    <div className=" p-5  lg:p-20 flex justify-start  items-center flex-col w-full ">
      <div className="p-10 w-full text-center pb-2 text-2xl font-bold">
        <h1>Transaction</h1>
      </div>
      <form
        className="p-10 flex flex-col gap-3 w-full"
        onSubmit={handleSubmit(HandleClick)}
      >
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title"
            className=" border p-2 mt-3 outline-none"
            {...register("title")}
          />
          {errors.title && <span className="mt-3 py-2 px-3 text-center shadow-sm bg-red-200 text-red-500">{errors.title.message}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount">Amount</label>
          <input
            
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount"
            className=" border p-2 mt-3 outline-none "
            {...register("amount")}
          />
           {errors.amount && <span className=" mt-3 py-2 px-3 text-center shadow-sm bg-red-200 text-red-500">{errors.amount.message}</span>}
        </div>
        <div className="pt-2">
          <select {...register("type")}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="mt-3 ">
          <input
            type="submit"
            className="py-2 px-3 w-32 rounded-md bg-green-500 text-white"
          />
        </div>
      
      </form>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default AddExpense;
