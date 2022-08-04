// import {Link} from react-router-dom;
import dd from '../../assets/icons8-chevron-24.png'

const Navbar = () => {
  return (
    <div className="navbar p-4 px-32 flex justify-between text-white bg-darkBlue font-bold">
      <div className="navbar-left flex space-x-2">
        <a href="/" className='mr-2 text-3xl'>weRide</a>
        <a href="about" className='flex hover:bg-homeBlue p-2 px-5 rounded-full'>Company <img src={dd} alt="" /> </a>
        <a href="safety" className='p-2'>Safety</a>
        <a href="help" className='p-2'>Help</a>
      </div>
      <div className="navbar-right flex space-x-2">
        <a href="faq" className='p-2'>FAQ's</a>
        <a href="booking" className='p-2'>Log In</a>
        <a href="contact" className='p-2 px-4 text-darkBlue bg-white rounded-full'>Sign Up</a>{" "}
      </div>
    </div>
  );
};

export default Navbar;
