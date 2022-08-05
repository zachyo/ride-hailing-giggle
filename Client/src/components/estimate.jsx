const Estimate = () => {
    return (
      <div className="estimate flex space-x-8 mx-auto items-center justify-between w-2/3">
        <h1>
          Ready to roll? <br /> Get an estimate.
        </h1>
        <div className="flex space-x-8">
          <input type="text" placeholder="Enter pick-up location*" />
          <input type="text" placeholder="Enter drop-off location*" />
          <button className="border border-black">Get estimate</button>
        </div>
      </div>
    );
}
 
export default Estimate;