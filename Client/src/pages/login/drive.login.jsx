// import { Link } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import './login.css'

const Login = () => {
  let phone;
  let password;

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "phoneNumber") {
      phone = value;
    }
    password = value;
  };
  return (
    <div className="login flex items-center justify-center ">
      <div className=" py-12 px-8 rounded-2xl bg-homeBlue my-20">
        <h1 className="font-bold text-2xl mb-8 text-darkBlue  border-darkBlue text-left">
          weRide
        </h1>
        <div className="">
          <form action="" className="flex flex-col w-90">
            <p className="font-bold text-left text-3xl mb-4">
              Login and resume <br />
              your driver application
            </p>
            <p className="mb-4">We'll send a text to verify your phone</p>
            <FormInput
              type="number"
              name="phoneNumber"
              label="Phone Number"
              placeholder="+234 Phone Number"
              onChange={handleChange}
              required
            />
            <div className="flex">
              <input
                type="checkbox"
                name="Terms of Service"
                id="signedIn"
                required
                className="text"
              />
              {/* <span className=" w-5 h-5 border border-black rounded-md -ml-2 mr-4"></span> */}
              <label htmlFor="signedIn" className="ml-4">
                Keep me signed in
              </label>
            </div>

            <button
              to="/"
              className="hover:bg-homeBlue border-2 hover:border-darkBlue hover:text-black rounded-full p-4 font-bold bg-darkBlue text-white text-center mt-8 mb-8"
              onClick={() => console.log(phone, password)}
            >
              Login
            </button>

            <a href="forgotpassword" className="text-center underline">
              {" "}
              Forget password?
            </a>

            {/* <p className="relative flex justify-between px-4 mt-8">
              {" "}
              Don't have an account?
              <a href="signup" className=" text-darkBlue hover:underline">
                {" "}
                Sign up
              </a>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
