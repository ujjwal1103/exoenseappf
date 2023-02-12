import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {add} from '../../../redux/slices/userSlice.js'
import axios from 'axios'
const Login = () => {
    const navigate = useNavigate()
    const [error,setError] =useState("")
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const dispatch = useDispatch()
    const handleInput=(e)=>{
      setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit= async(e)=>{   
      e.preventDefault()
      try{
        const res = await axios.post("https://expenseapr.onrender.com/api/auth/login",user)
        if(res){
          localStorage.setItem("user",JSON.stringify(res.data))
          dispatch(add(res.data.data))
          navigate("/")
        }
    }
    catch(err){
       setError(err.response)
    }
    }


  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <div className='p-3 w-[30%] bg-white shadow-md rounded'>
            <form className='w-full p-3'>
                <div className='w-full flex flex-col my-2 p-3 justify-center items-center text-2xl font-bold'>
                    <h1>Login to ExpenseTrack</h1>
                </div>
                <div className='w-full flex flex-col my-2 p-3'>
                    <label htmlFor="email" className='text-base my-2'>Email</label>
                    <input type="email" id='email' name='email' className='px-1 py-2 outline-none border-2 rounded pl-4' required placeholder='Enter your email' onChange={e=>handleInput(e)}/>
                </div>
                <div className='w-full flex flex-col my-2 p-3'>
                    <label htmlFor="password" className='text-base my-2'>Password</label>
                    <input type="password" id='password' name='password' className='px-1 py-2 outline-none border-2 rounded pl-4 ' autoComplete='false' required placeholder='Enter new password'  maxLength={10} onChange={e=>handleInput(e)}/>
                </div>
                <div className='w-full flex flex-col p-3 items-center '>
                    <button className='bg-blue-500 w-24 px-3 py-2 text-white rounded-md hover:bg-blue-600 duration-110 ease-in-out' onClick={handleSubmit}>Login</button>
                </div>
                <p className='text-center text-red-500'>{error}</p>
                <div className='w-full flex flex-col my-2  items-center '>
                    <span>don't have an account?  <Link to={'/register'} className='text-red-500 cursor-pointer hover:text-red-600'>Register</Link></span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login