import contexi from '../../assets/contexi.png'


// mobile first
const Homepage = () => {
  return (
    <div className="homepage bg-homeBlue">
      <div className="header flex mx-auto items-center justify-between space-x-30 w-2/3">
        <div className="header-left">
          <h1 className="welcome text-6xl font-bold text-darkBlue mb-12">Always the ride <br /> you want</h1>
          <p className="text-2xl mb-12 text-darkBlue">Request a ride, hop in, and relax</p>
          <button className='bg-darkBlue text-white font-bold p-3 px-4 rounded-lg hover:text-darkBlue hover:bg-homeBlue border border-darkBlue'>Sign Up to ride</button>
        </div>

        <div className="header-right my-12">
          <img src={contexi} alt="" className='w-5/6 rounded-2xl outline outline-darkBlue outline-offset-4'/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
