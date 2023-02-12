export const useTotalBalance = (expenses)=>{
    
        const income = expenses
          ?.filter((exp) => exp.type === "income")
          .reduce((val, exp) => {
            return (val += parseFloat(exp.amount));
          }, 0);
    
        const expense = expenses
          ?.filter((exp) => exp.type === "expense")
          .reduce((val, exp) => {
            return (val += parseFloat(exp.amount));
          }, 0);
    
        const totalBalance = income - expense
        
        return {totalBalance}
    
}