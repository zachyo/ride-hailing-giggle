const Estimate = () => {
    return (
      <div className="estimate flex mx-auto items-center justify-between w-2/3 py-10">
        <h1 className="font-bold text-3xl ">
          Ready to roll? <br /> Get an estimate.
        </h1>
        <div className="flex space-x-8">
          <input
            type="text"
            placeholder="Enter pick-up location*"
            className="p-3 border border-black rounded-lg px-8"
          />
          <input
            type="text"
            placeholder="Enter drop-off location*"
            className="p-3 border border-black rounded-lg px-8"
          />
          <button className="border border-black p-2 px-4 rounded-full font-bold text-white bg-black">Get estimate</button>
        </div>
      </div>
    );
}
 
export default Estimate;