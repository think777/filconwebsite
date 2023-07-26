import Image from "next/image";
import logo from '@/public/logo.png'

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start flex items-center">
        
        <Image 
        src={logo} 
        alt="logo"
        className="pl-4 pt-2 pb-2 pr-1 w-1/4 sm:w-1/6 md:w-1/8 lg:w-1/10 xl:w-1/12"
        />
        


        <a className="btn btn-ghost normal-case text-xl sm:text-lg md:text-xl lg:text-2xl">Filcon Sales & Service</a>
        </div>

 

      

      <div className="navbar-end">
      <div className="hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      <li><a>About Us</a></li>
      <li><a>Contact Us</a></li>
    </ul>
      </div>
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Products</a></li>
        <li>
          <a>About Us</a>
          
        </li>
        <li><a>Contact Us</a></li>
      </ul>
    </div>
    </div>
    </div>
  );
};

export default Navbar