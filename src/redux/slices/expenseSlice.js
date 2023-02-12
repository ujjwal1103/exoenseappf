import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data:[]

};
const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setExpenses(state, action) {
      state.data = action.payload;
      return state;
    },
    addExp(state, action) {
      state.data.push(action.payload);
    },
    deleteAll(state, action) {
      state.data = action.payload;
      return state;
    },
  },
});
export const { addExp, setExpenses, deleteAll,setError } = expenseSlice.actions;
export default expenseSlice.reducer;
export function getExpensesThunk(userId) {
  return async function fetchExpense(dispatch) {
    try {
      if(userId === null){
       dispatch(setExpenses([]))
      }
      else{
        const res = await axios.get(
          `https://expenseapr.onrender.com/api/transactions/get/${userId}`
        );
        console.log(res.data);
        dispatch(setExpenses(res.data));
      }     
    } catch (err) {
       console.log(err.response.data)
    }
  };
}
export function addexpense(expense) {
  return async function addex(dispatch) {
    try {
      await axios.post(
        "https://expenseapr.onrender.com/api/transactions/add/transaction",
        expense
      );
      dispatch(addExp(expense));
    } catch (err) {
      alert(err.response.data);
    }
  };
}
export function deleteExpenses(userId) {
  return async function addex(dispatch) {
    try {
      await axios.delete(
        `https://expenseapr.onrender.com/api/transactions/delete/${userId}`
      );
      dispatch(deleteAll(initialState.data))
    } catch (err) {
      alert(err.response.data);
    }
  };
}
