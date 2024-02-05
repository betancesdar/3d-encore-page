import { NavLink } from "react-router-dom"
import imgLogo from "../assets/Encore.png"

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
       to="/" className="flex items-center justify-center shadow-xl bg-white rounded-md">
        <img src={imgLogo} alt="navBarLogo" style={{ width: "250px", height: "auto" }} className="mr-2 " />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
         to="/about" className={({ isActive }) => isActive ? 'blue-gradient_text' : 'text-black' }>
            About
        </NavLink>
        <NavLink 
        to="/solutions" className={({ isActive }) => isActive ? 'blue-gradient_text' : 'text-black' }>
            Solutions
        </NavLink>
       
      </nav>
      <NavLink
         to="/quantation" className={({ isActive }) => isActive ? 'blue-gradient_text' : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full p-4 shadow-lg'}>
            Get your Price
        </NavLink>  
    </header> 
  )
}

export default Navbar
