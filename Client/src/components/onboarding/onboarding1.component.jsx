import reg from "../../assets/images/reg.png";
import "./onboarding.css";

const OnBoarding1 = () => {
  return (
    <div className="booking container h-screen flex flex-col justify-center items-center bg-homeBlue">
      <div className="dot text-center pt-12 pb-12 bg-homeBlue w-80">
        <img src={reg} alt="registration" />
      </div>
      <div className="low container text-center space-y-16 bg-darkBlue text-white pt-32 h-2/3 items-center">
        <h1 className="font-bold text-4xl mb-16">Registration</h1>
        <p className="text-1xl font-medium">
          Perfect ride booking web-app for your <br />
          safety and comfortable trip
        </p>
        <div className="flex space-x-6  mx-auto justify-center mt-32">
          <span className="w-4 bg-homeBlue h-2 rounded-full"></span>
          <span className="w-4 bg-white h-2 rounded-full"></span>
          <span className="w-4 bg-white h-2 rounded-full"></span>
        </div>
        <button className="border-b">Next &rarr;</button>
      </div>
    </div>
  );
};

export default OnBoarding1;
