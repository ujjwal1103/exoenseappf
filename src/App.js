import {Navbar} from "./common";
import {Register,Login} from "./domain/Auth";
import {Home} from "./domain/Expense";

import { Route, Routes } from "react-router-dom";
;

function App() {
  

  return (
   
    <div className="bg-gray-100 h-screen">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
         
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
   
    </div>
  
  );
}

export default App;
