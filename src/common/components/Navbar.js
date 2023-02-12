import {Link} from "react-router-dom";
import { remove } from "../../redux/slices/userSlice";
import {getExpensesThunk} from '../../redux/slices/expenseSlice.js'
import {useDispatch, useSelector} from 'react-redux'
const Navbar = () => {
   
  const dispatch = useDispatch();
  const {user} = useSelector(state=>state)
  
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <img
            src="https://m.media-amazon.com/images/I/61AxZXJ1u7L.png"
            className="h-6 mr-3 sm:h-9"
            alt="ExpenseTrack Logo"
          />
          <Link to="/" className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            ExpenseTrack
          </Link>
        </div>
        <div>
          {user && user.username}
        </div>
        <div className="flex md:order-2">
     
         {user && <Link 
            to='/login'
            type="button"
            className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
            onClick={()=>{
              dispatch(getExpensesThunk(null))
              dispatch(remove(null))
              localStorage.clear();
            }
            } >
            Logout
          </Link>}
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
