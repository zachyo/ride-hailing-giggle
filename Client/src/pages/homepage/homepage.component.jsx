import contexi from '../../assets/contexi.png'

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="info tac">
        <p className="welcome">welcome to contexi</p>
        <h1 className='text-4xl'>
          Your first choice <br />
          for traveling anywhere nnnnnnnnnnnnnnnnnnnnnnn
        </h1>
        <div className="left-img">
          <img src={contexi} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
