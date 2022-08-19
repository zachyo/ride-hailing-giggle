import { Link } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";

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
    <div className="login bg-homeBlue  flex items-center justify-center">
      <div className="text-center py-24 px-12 rounded-2xl">
        <h1 className="font-bold text-5xl mb-24 text-darkBlue  border-darkBlue">weRide</h1>
        <div className="">
          <form action="" className="flex flex-col w-80">
            <FormInput
              type="tel"
              name="phoneNumber"
              label="Phone Number"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
            <FormInput
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <p className="relative">
              <a
                href="forgotpassword"
                className="absolute top-5 right-2 text-darkBlue hover:underline"
              >
                {" "}
                Forget password?
              </a>
            </p>
            <Link
              to="/"
              className="hover:bg-homeBlue border-2 hover:border-darkBlue hover:text-black rounded-md p-4 font-bold bg-darkBlue text-white text-center mt-12"
              onClick={() => console.log(phone, password)}
            >
              Login
            </Link>
            <p className="relative flex justify-between px-4 mt-8"> Don't have an account?
              <a
                href="signup"
                className=" text-darkBlue hover:underline"
              >
                {" "}
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
