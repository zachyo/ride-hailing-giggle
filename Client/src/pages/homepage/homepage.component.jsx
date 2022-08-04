import contexi from "../../assets/contexi.png";
import clock from '../../assets/icons8-clock-36.png'
import money from "../../assets/icons8-get-cash-36.png";
import address from "../../assets/icons8-address-36.png";



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
          <h1 className="font-bold text-4xl  text-darkBlue mb-16">
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
    </div>
  );
};

export default Homepage;
