import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
const Register = () => {
  const [user,setUser] = useState({
      username:"",
      email:"",
      mobileNumber:"",
      password:""
  })
  const [error,setError] =useState("")
  const navigate = useNavigate()
  const handleInput=(e)=>{
    setUser(prev =>({ ...prev, [e.target.name]: e.target.value }));
  }


  const handleSubmit= async(e)=>{
    e.preventDefault()
    try{
        const res = await axios.post("https://expenseapr.onrender.com/api/auth/register",user)
        if(res){
            setError("")
            alert(res.data)
            console.log(res)
            navigate("/login")
    }
    }
    catch(err){
       setError("error")
    }
   
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <div className='w-full lg:p-3  lg:w-[30%] bg-white shadow-md rounded'>
            <form className='w-full p-3'>
                <div className='w-full flex flex-col lg:my-2 p-3 justify-center items-center text-2xl font-bold'>
                    <h1>Creat New Account</h1>
                </div>
                <div className='w-full flex flex-col lg: my-2 p-3'>
                    <label htmlFor="username" className='text-base my-2'>Full Name</label>
                    <input type="text" id='username' name='username' className='px-1 py-2 outline-none border-2 rounded pl-4' required placeholder='Enter your name' onChange={e=>handleInput(e)}/>
                </div>
                <div className='w-full flex flex-col my-2 p-3'>
                    <label htmlFor="email" className='text-base my-2'>Email</label>
                    <input type="email" id='email' name='email' className='px-1 py-2 outline-none border-2 rounded pl-4' required placeholder='Enter your email' onChange={e=>handleInput(e)}/>
                </div>
                <div className='w-full flex flex-col my-2 p-3'>
                    <label htmlFor="mobilenumber" className='text-base my-2'>Mobile Number</label>
                    <input type="number" id='mobilenumber' name='mobileNumber' className='px-1 py-2 outline-none border-2 rounded pl-4' required placeholder='Enter your mobile number' onChange={e=>handleInput(e)}/>
                </div>
                <div className='w-full flex flex-col my-2 p-3'>
                    <label htmlFor="password" className='text-base my-2'>Password</label>
                    <input type="password" id='password' name='password' className='px-1 py-2 outline-none border-2 rounded pl-4 ' required placeholder='Enter new password'  onChange={e=>handleInput(e)}/>
                </div>
                <div className='w-full flex flex-col p-3 items-center '>
                    <button className='bg-blue-500 w-24 px-3 py-2 text-white rounded-md hover:bg-blue-600 duration-110 ease-in-out' onClick={e=>handleSubmit(e)}>Register</button>
                </div>
                <p className='text-center text-red-500'>{error}</p>
                <div className='w-full flex flex-col my-2  items-center '>
                    <span>don't have an account?  <Link to={`/login`} className='text-red-500 cursor-pointer hover:text-red-600'>Login</Link></span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register