import {useState} from 'react'
import Input from './components/Input' 
import {AiFillFacebook} from 'react-icons/ai'
export default function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const enable = username && password
  return (
    <>
    <div className="h-full w-full flex gap-x-8 items-center justify-center">
    <div className="w-[400px] h-[581px] bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]"></div>
    
    <div className="w-[350px] bg-white border px-[40px] pt-6 pb-2 ">
    <a href="#" className="flex  justify-center">
    <img className="h-[121px] mb-14 " src="https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png"/>
    </a>
    
      <form className="grid gap-y-1.5">
        <Input type='text' value={username} onChange={e=> setUsername(e.target.value)} label="Phone number, username or email"/>
       
        <Input type='passoword' value={password} onChange={e=> setPassword(e.target.value)} label="Password"/>
    
    <button type="submit" disabled={!enable} className="h-[38px] rounded-lg text-white bg-brand disabled:opacity-50">Log In</button>
      
      <div className="flex items-center">
        <div className="h-px bg-gray-300 flex-1"></div>
        <span className="px-4 text-xs">OR</span>
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>
      <a className='flex flex-row justify-center items-center gap-x-2 text-sm font-semibold'>
        <AiFillFacebook size={20}/>
        Login with Facebook
      </a>
      <a href='#' className='text-xs flex items-center justify-center text-link'>Forgot password</a>

      </form>
    </div>


    </div>
  
    </>
  )
}
