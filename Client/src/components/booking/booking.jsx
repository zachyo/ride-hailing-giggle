const BookRide = () => {
  return (
    <div className="container">
      <form action="" className="p-16 flex flex-col space-y-4 w-1/3">
        <input
          type="text"
          name="current_location"
          placeholder="Where from?"
          className="border-2 border-black p-2 rounded-lg"
        />
        <input
          type="text"
          name="destination"
          id=""
          placeholder="Where to?"
          className="border-2 border-black p-2 rounded-lg"
        />
      </form>
    </div>
  );
};

export default BookRide;
