import '../style/Navbar.css'
import { BsSunFill } from 'react-icons/bs'
import { BsMoonFill } from 'react-icons/bs'

export const Navbar = ({dark,setDark}) => {
  return (
    <div className='navbar'>
          <div onClick={()=>{setDark(!dark)}} className="toggle">
              <div className={`toggle_active ${dark ? 'toggle_active_true':''}`}></div>
          </div>
          {dark ? <BsMoonFill size={24} color='gray' /> : <BsSunFill size={24} color='orange' /> }
    </div>
  )
}
