import {Link } from  'react-router-dom'

const Login = () => {
  return (
    <div className="login bg-homeBlue w-screen h-screen flex items-center justify-center">
      <div className="text-center border border-black py-24 px-12 rounded-2xl">
        <h1 className="font-bold text-3xl mb-24">weRide</h1>
        <div className="">
          <form action="" className="flex flex-col w-80">
            <input
              type="tel"
              name="phone_number"
              placeholder="Phone number"
              className="p-3 border-2 border-darkBlue rounded-lg mb-8 active:outline active:outline-darkBlue"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-3 border-2 border-darkBlue rounded-lg mb-16"
            />
            <Link
              to="/"
              className="hover:bg-homeBlue border-2 hover:border-darkBlue hover:text-black rounded-full p-4 font-bold bg-darkBlue text-white text-center mt-12"
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
