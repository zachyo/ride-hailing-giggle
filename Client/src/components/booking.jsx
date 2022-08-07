import {Link } from 'react-router-dom'

const BookRide = () => {


  return (
    <div className="container text-center w-3/4 flex">
      <div className="map w-5/6">Map</div>
      <form action="" className=" flex flex-col space-y-4 w-3/4">
        <input
          type="text"
          name="current_location"
          placeholder="Where from?"
          className="border-2 border-black p-2 rounded-lg "
        />
        <input
          type="text"
          name="destination"
          id=""
          placeholder="Where to?"
          className="border-2 border-black p-2 rounded-lg"
        />
        {/* <button
          type="submit"
          className="bg-black text-white rounded-full p-4 w-1/3 font-bold hover:bg-slate-300 hover:text-black"
        >
          Request
        </button> */}
        <Link
          type="submit"
          to="/rides"
          className="hover:bg-homeBlue hover:text-black rounded-full p-4 w-1/3 font-bold bg-darkBlue text-white text-center"
        >
          {" "}
          Request
        </Link>
      </form>
    </div>
  );
};

export default BookRide;
