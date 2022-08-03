const Rides = () => {
  return (
    <div className="">
      <h1 className="text-3xl mb-8">Select Ride</h1>
      <div className="ride flex space-x-5">
        <img src="" alt="car_img" />
        <div className="">
          <h1>Driver's Name</h1>
          <p>Rating</p>
          <p>Distancce Away / Time</p>
        </div>
        <div className="">
          <p>$price</p>
          <button className="border border-black p-2 rounded-lg">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default Rides;
