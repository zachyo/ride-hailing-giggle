import contexi from '../../assets/contexi.png'

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="info tac">
        <p className="welcome">welcome to contexi</p>
        <h1>
          Your first choice <br />
          for traveling anywhere
        </h1>
        <div className="left-img">
          <img src={contexi} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
