import { useAddTransactionMutation } from "../../../redux/slices/apiSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { schema } from "../../../utility/expenseSchema";
const AddExpense = () => {
  const { data: user } = JSON.parse(localStorage.getItem("user"));
  const { handleSubmit, register, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [addTransaction,{isLoading}] = useAddTransactionMutation();
 
  
 
  console.log(errors)


  const HandleClick = async (data) => {
    
    const expense = { ...data, userId : user.userId}
    await addTransaction(expense);
    reset({
      title: "",
      amount: ""
    })
   
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
        {isLoading?<button disabled type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
    <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Loading...
</button> :<input
            type="submit"
            className="py-2 px-3 w-32 rounded-md bg-green-500 text-white"
          />} 
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
