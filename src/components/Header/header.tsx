import { NavLink } from "react-router-dom";
import arrowDown from '../../assets/arrow-down.png'
import logo from '../../assets/landing-logo.png'
import searchIcon from '../../assets/search-icon.png'
import { motion } from "framer-motion";


const Header = () => {



  return (
    <header className=' w-full h-[51px] mb-7  px-[98px] '>
      <div className="custom-container  flex items-center">
        <div className="mr-6">
          <img src={logo} loading="lazy" alt="Fitness website logo" width={116} height={51} />
        </div>
        <div className="mr-6 w-[41px] h-[38px] bg-[#262626] flex items-center justify-center rounded-[12px]">
          <img src={searchIcon} alt="Search icon" width={18} height={18} className="h-[18px]" />
        </div>
        <nav className="flex items-center mr-6">
          <ul className="flex items-center gap-20">
            <li className="w-[107px] h-7 text-center">
              <NavLink to='/' className='text-white'>Home</NavLink>
            </li>
            <li className="w-[107px] h-7 relative">
              <NavLink to='/programs' className=' text-white'>Programs</NavLink>
              <img src={arrowDown} alt="Dropdown arrow" width={11} height={11} className="absolute top-[10px] right-[20px]" />
            </li>
            <li className="w-[107px] h-7  relative">
              <NavLink to='/programs' className='text-white'>Coaching</NavLink>
              <img src={arrowDown} alt="Dropdown arrow" width={11} height={11} className="absolute top-[10px] right-[20px]" />
            </li>
            <li className="w-[107px] h-7">
              <NavLink to='/programs' className='text-white'>Membership</NavLink>
            </li>
            <li className="w-[107px] h-7">
              <NavLink to='/programs' className='text-white'>About Us</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center w-40">
          <motion.button
            type="button"
            className="bg-transparent text-[#CD4E17] text-sm py-2 px-4 w-[67px] rounded-[12px] border-2 border-solid border-[#CD4E17] mr-3 cursor-pointer relative overflow-hidden"
            whileHover="hover"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CD4E17] to-transparent opacity-50"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
            <span className="relative z-10">Login</span>
          </motion.button>



          <button type="button" className="bg-[#D90A14] text-white text-sm py-2 px-4 w-[81px] rounded-[12px]  cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </header >
  )
}

export default Header

