import contexi from "../../assets/contexi.png";
import clock from '../../assets/icons8-clock-36.png'
import money from "../../assets/icons8-get-cash-36.png";
import address from "../../assets/icons8-address-36.png";
import calendar from "../../assets/icons8-edit-calendar-24.png";
import mask from "../../assets/icons8-protection-mask-24.png";
import man from "../../assets/icons8-man-with-money-24.png";
import phone from "../../assets/phone.png";
import driver from "../../assets/driver.jpg";


import Estimate from "../../components/estimate";


 

// mobile first
const Homepage = () => {
  return (
    <div className="homepage bg-homeBlue">
      <div className="header container flex mx-auto items-center justify-between space-x-30 w-2/3">
        <div className="header-left">
          <h1 className="welcome text-6xl font-bold text-darkBlue mb-12">
            Always the ride <br /> you want
          </h1>
          <p className="text-2xl mb-12 text-darkBlue">
            Request a ride, hop in, and relax
          </p>
          <button className="bg-darkBlue text-white font-bold p-3 px-4 rounded-lg hover:text-darkBlue hover:bg-homeBlue border-2 border-darkBlue">
            Sign Up to ride
          </button>
        </div>

        <div className="header-right my-12">
          <img
            src={contexi}
            alt=""
            className="w-5/6 rounded-2xl outline outline-darkBlue outline-offset-4 m-0"
          />
        </div>
      </div>
      <div className="whyUs mt-16 bg-white py-24 ">
        <div className="w-2/3 mx-auto ">
          <h1 className="font-bold text-4xl  text-black mb-16">
            Why use the weRide App?
          </h1>
          <div className="uses flex space-x-16">
            <div className="uses1 w-2/6">
              <img src={clock} alt="time" />
              <h1 className="text-2xl font-semibold my-3">Rides on demand</h1>
              <p className="text-1xl">
                Request a ride at any time and on any day of the year.
              </p>
            </div>
            <div className="uses2 w-2/6">
              <img src={money} alt="money" />
              <h1 className="text-2xl font-semibold my-3">
                Suggest your own prices
              </h1>
              <p className="text-1xl">
                Suggest your own prices on every kind of ride, from daily
                commutes to special evenings out.
              </p>
            </div>
            <div className="uses3 w-2/6">
              <img src={address} alt="location" />
              <h1 className="text-2xl font-semibold my-3">
                A comfortable way to move
              </h1>
              <p className="text-1xl">
                Tap and let your driver take you where you want to go.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ride  container flex mx-auto items-center justify-between space-x-30 w-2/3 py-12 text-darkBlue">
        <div className="ride-left flex flex-col space-y-8">
          <h1 className="font-bold text-lg mb-8">RIDE WITH weRide </h1>
          <p className="font-bold text-4xl mb-8">
            Ready, set, go <br /> in just a few quick taps
          </p>
          <p>No matter your destination, we’ll get you where you need to go</p>
          <p className="font-bold flex">
            <img src={man} alt="" className="mr-6" /> Get a reliable ride in
            minutes
          </p>
          <span className="font-bold flex">
            <img src={mask} alt="" className="mr-6" />
            Know that your driver is wearing a mask
          </span>
          <p className="font-bold flex mb-24">
            <img src={calendar} alt="" className="mr-6" />
            Schedule your ride in advance
          </p>
          <div className="button">
            <button className="mt-8 rounded-full w-1/3 p-2 px-0 text-lg bg-darkBlue text-white font-bold">
              Get a ride
            </button>
          </div>
        </div>
        <div className="phone">
          <img src={phone} alt="" />
        </div>
      </div>
      <div className="drive py-12 flex bg-white mx-auto items-center justify-center space-x-16">
          <img src={require("../../assets/driver.jpg")} alt="" className="rounded-xl" />
        <div className="ride-left flex flex-col space-y-8 py-6">
          <h1 className="font-bold text-lg mb-4">DRIVE WITH weRide </h1>
          <p className="font-bold text-4xl mb-8">
            Set your own hours. Earn on <br /> your own terms.
          </p>
          <div className="flex">
            <img
              src={require("../../assets/icons8-stack-of-money-24.png")}
              alt=""
              className="mr-4 h-1/2 mt-1"
            />{" "}
            <span>
              <p className="font-bold">Reliable earnings:</p>
              <p>Make money, keep your tips, and cash out when you want.</p>
            </span>
          </div>
          <div className="flex">
            <img
              src={require("../../assets/icons8-future-24.png")}
              alt=""
              className="mr-4 h-1/2 mt-1"
            />{" "}
            <span>
              <p className="font-bold">A flexible schedule:</p>
              <p>Be your own boss and drive whenever it works for you.</p>
            </span>
          </div>
          <div className="flex">
            <img
              src={require("../../assets/icons8-lightning-bolt-24.png")}
              alt=""
              className="mr-4 h-1/2 mt-1"
            />{" "}
            <span>
              <p className="font-bold">Get paid instantly:</p>
              <p>Cash out your earnings whenever you want.</p>
            </span>
          </div>

          <div className="button">
            <button className="mt-8 rounded-full w-1/3 p-2 px-0 text-lg bg-black text-white font-bold">
              Get a ride
            </button>
          </div>
        </div>
      </div>
      <Estimate />
    </div>
  );
};

export default Homepage;
