import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import { useState } from "react";

const Estimate = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAAx_FB8Sh4GSeuu3cfvIcyD7Ykbg6DmaI',
    libraries: ["places"],
  });

  const [distance, SetDistance] = useState("");
  const [duration, SetDuration] = useState("");
  const [directionResult, SetDirectionResult] = useState(null);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef()

  if (!isLoaded) {
    return <div className="">Still Loading</div>;
  }

   const calcRoute = async () => {
    if(originRef.current.value ==='' || destinationRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING
    })
    SetDirectionResult(results)
    console.log(directionResult)
    SetDistance(results.routes[0].legs[0].distance.text)
    SetDuration(results.routes[0].legs[0].duration_in_traffic.text);

  }

  return (
    <div className="estimate flex mx-auto items-center justify-between w-2/3 py-10">
      <h1 className="font-bold text-3xl ">
        Ready to roll? <br /> Get an estimate.
        <p>{distance}</p>
        <p>{duration}</p>
      </h1>
      <div className="flex space-x-8">
        <Autocomplete>
          <input
            type="text"
            placeholder="Enter pick-up location*"
            className="p-3 border border-black rounded-lg px-8"
            ref={originRef}
          />
        </Autocomplete>
        <Autocomplete>
          <input
            type="text"
            placeholder="Enter drop-off location*"
            className="p-3 border border-black rounded-lg px-8"
            ref={destinationRef}
          />
        </Autocomplete>
        <button className="border border-black p-2 px-4 rounded-full font-bold text-white bg-black" onClick={calcRoute}>
          Get estimate
        </button>
      </div>
    </div>
  );
};

export default Estimate;
