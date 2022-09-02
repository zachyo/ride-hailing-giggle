import {Link} from 'react-router-dom'
import down from '../../src/assets/icons/white-down.png'
import user from "../../src/assets/icons/user2.png";


const Navbar = () => {
  return (
    <div className="navbar p-4 px-32 flex justify-between text-white bg-darkBlue font-bold">
      <div className="navbar-left flex space-x-2">
        <Link to="/" className="mr-2 text-3xl">
          weRide
        </Link>
        <a
          href="about"
          className="flex hover:bg-homeBlue p-2 px-5 rounded-full"
        >
          Company <img src={down} alt="" className="pl-2" />{" "}
        </a>
        <Link to="safety" className="p-2">
          Safety
        </Link>
        <Link to="help" className="p-2">
          Help
        </Link>
      </div>
      <div className="navbar-right flex space-x-7 ">
        <Link to="faq" className="p-2">
          FAQ's
        </Link>
        <Link to="ride/login" className="flex p-2 text-base ">
          <img src={user} alt="user" className='pr-3'/> Log In
        </Link>
        <a
          href="signup"
          className="p-2 px-4 text-darkBlue bg-white rounded-full"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
