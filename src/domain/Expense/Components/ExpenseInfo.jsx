import fmt from "indian-number-format";
import { useTotalBalance } from "../../../utility/useTotalBalance";

const ExpenseInfo = ({ expenses }) => {
  const { totalBalance } = useTotalBalance(expenses);
  
  return (
    <div className="flex h-20 bg-green-100 mt-10 justify-center items-center mb-10 ">
      <div className="text-2xl font-bold">
        Your Balance: {fmt.format(totalBalance)} ₹
      </div>
    </div>
  );
};
export default ExpenseInfo;
