import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/landing-logo.png';
import searchIcon from '../../assets/search-icon.png';
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className='w-full h-[51px] mb-7 px-[98px] max-[1200px]:pt-5'>
      <div className="custom-container max-[429px]:">
        <div className="flex items-center max-[429px]:justify-between ">
        <div className="mr-6">
          <img src={logo} loading="lazy" alt="Fitness website logo" width={116} height={51} />
        </div>

        <div className="w-[41px] h-[38px] bg-[#262626] flex items-center justify-center rounded-[12px] mr-auto ">
          <img src={searchIcon} alt="Search icon" width={18} height={18} className="h-[18px]" />
        </div>

        <nav className=" max-[900px]:hidden flex items-center mr-6">
          <ul className="flex items-center xl:gap-20 max-[1280px]:gap-10 w-full">
            <li className="h-7 text-center">
              <NavLink to='/' className='text-white xl:text-[16px] max-[1300px]:text-[12px]'>Home</NavLink>
            </li>
            <li className="h-7 relative">
              <NavLink to='/programs' className='text-white xl:text-[16px] max-[1300px]:text-[12px]'>Programs</NavLink>
              
            </li>
            <li className="h-7 relative">
              <NavLink to='/coaching' className='text-white xl:text-[16px] max-[1300px]:text-[12px]'>Coaching</NavLink>
            </li>
            <li className="h-7">
              <NavLink to='/membership' className='text-white xl:text-[16px] max-[1300px]:text-[12px]'>Membership</NavLink>
            </li>
            <li className="h-7">
              <NavLink to='/about-us' className='text-white xl:text-[16px] max-[1300px]:text-[12px]'>About Us</NavLink>
            </li>
          </ul>
        </nav>

        <div className="max-[900px]:hidden flex items-center w-40 ml-auto">
          <motion.button
            type="button"
            className="bg-transparent text-[#CD4E17] text-sm xl:py-2 xl:px-4 max-[1300px]:py-1 max-[1300px]:px-2 w-[67px] rounded-[12px] border-2 border-solid border-[#CD4E17] mr-3 cursor-pointer relative overflow-hidden"
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

          <button type="button" className="bg-[#D90A14] text-white text-sm py-2 px-4 w-[81px] rounded-[12px] cursor-pointer">
            Sign Up
          </button>
        </div>

        <div className="max-[900px]:flex hidden items-center">
          <button
            className="relative w-6 h-6 flex flex-col justify-between items-center group"
            onClick={toggleMenu}
          >
            <span className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
            <span className={`block h-1 w-full bg-white rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[71px] left-0 w-full bg-[#262626] text-white p-4 z-50"
          >
            <nav>
              <ul className="flex flex-col items-center gap-4">
                <li>
                  <NavLink to='/' onClick={toggleMenu} className='text-white text-[16px]'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/programs' onClick={toggleMenu} className='text-white text-[16px]'>Programs</NavLink>
                </li>
                <li>
                  <NavLink to='/coaching' onClick={toggleMenu} className='text-white text-[16px]'>Coaching</NavLink>
                </li>
                <li>
                  <NavLink to='/membership' onClick={toggleMenu} className='text-white text-[16px]'>Membership</NavLink>
                </li>
                <li>
                  <NavLink to='/about-us' onClick={toggleMenu} className='text-white text-[16px]'>About Us</NavLink>
                </li>
                <div className="flex flex-col items-center gap-2 mt-4">
                  <motion.button
                    type="button"
                    className="bg-transparent text-[#CD4E17] text-sm py-2 px-4 rounded-[12px] border-2 border-solid border-[#CD4E17] cursor-pointer relative overflow-hidden"
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

                  <button type="button" className="bg-[#D90A14] text-white text-sm py-2 px-4 rounded-[12px] cursor-pointer">
                    Sign Up
                  </button>
                </div>
              </ul>
            </nav>
          </motion.div>
        )}
      </div>
      </div>
    </header>
  );
};

export default Header;
