import FormInput from "../../components/form-input/form-input.component";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  let phone;

  const [step, SetStep] = useState(1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "phoneNumber") {
      phone = value;
    }
  };

  const handleStep = () => {
    console.log(step)
    if (step < 2) {
        SetStep(2)
    }
  }
  return (
    <div className="signup bg-homeBlue  flex items-center justify-center">
      <div className="py-24 px-12 rounded-2xl w-2/3">
        <p className="font-bold">HELLO, FUTURE DRIVER</p>
        <h1 className="font-bold text-7xl mb-8 mt-4  border-darkBlue">
          It pays (a lot) to drive right now
        </h1>
        <p className="font-bold text-lg">Sign up to Drive</p>
        <form>
          {step === 1 && (
            <div className="my-4">
              <p className="mb-12">
                Let's start with your phone number - we'll text you a code to
                verify your phone
              </p>
              <input
                type="radio"
                name="car"
                value="true"
                id="car"
                className="mr-4"
                required
              />
              <label htmlFor="car" className="mr-16">
                I have a car
              </label>
              <input
                type="radio"
                name="car"
                value="false"
                id="noCar"
                className="mr-4"
              />
              <label htmlFor="noCar">I need a car</label>
              <FormInput
                type="tel"
                name="phoneNumber"
                placeholder="Mobile Phone Number"
                onChange={handleChange}
                required
                className="rounded-lg w-96 p-3 shadow-lg mt-3 mb-10 bg-white border border-darkBlue"
              />
              <button
                className=" hover:border-white mr-6 rounded-full py-3 font-bold bg-darkBlue text-white text-center px-8"
                onClick={handleStep}
              >
                Next
              </button>
              <input
                type="checkbox"
                name="Terms of Service"
                id="terms"
                required
              />
              <label htmlFor="terms">
                I agree to weRide's{" "}
                <a href="terms" className="underline">
                  Terms of Service
                </a>
              </label>
            </div>
          )}
          {step === 2 && (
            <div className="my-4">
              <p className="mb-8">
                Great! We'll need some information from you to get started.
              </p>
              <div className="flex flex-wrap">
                <FormInput
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                  className="rounded-lg w-72 p-3 shadow-lg mt-3 mr-6 bg-white border border-darkBlue"
                />
                <FormInput
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                  className="rounded-lg w-72 p-3 shadow-lg mt-3 mr-6  bg-white border border-darkBlue"
                />
                <FormInput
                  type="email"
                  name="email address"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                  className="rounded-lg w-72 p-3 shadow-lg mt-3  bg-white border border-darkBlue"
                />
                <FormInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                  className="rounded-lg w-72 mr-6 p-3 shadow-lg mt-3 mb-10 bg-white border border-darkBlue"
                />
                <FormInput
                  type="number"
                  name="referral code"
                  placeholder="Referal Code (Optional)"
                  onChange={handleChange}
                  required
                  className="rounded-lg w-72 p-3 shadow-lg mt-3 mb-10 bg-white border border-darkBlue"
                />
              </div>
            </div>
          )}
        </form>
        <p className="mt-8">
          Already applied or already a driver?
          <a href="login" className=" text-darkBlue hover:underline ml-1">
            {" "}
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
