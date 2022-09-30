// import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";
import Step1 from "./step1";
import Step2 from "./step2";

const SignUp = () => {
  let phone;
  const [signUpDetails, setSignUpDetails] = useState({});

  const [step, SetStep] = useState(1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  const handleStep = () => {
    console.log(step);
    if (step < 2) {
      SetStep(2);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = signUpDetails;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        createUserProfileDoc(signUpDetails);

        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    console.log(signUpDetails);
  };
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
            <Step1 handleChange={handleChange} handleStep={handleStep} />
          )}
          {step === 2 && (
            <Step2 handleChange={handleChange} handleSubmit={handleSubmit} />
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
