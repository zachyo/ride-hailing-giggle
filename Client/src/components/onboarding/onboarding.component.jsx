import { useState } from "react";
import OnBoarding1 from "./onboarding1.component";


const OnBoarding = () => {

  const [page1 , SetPage1] = useState(true)

  if (2>7) {
    SetPage1(false)
  }
  return (
    <div className="booking container h-screen flex flex-col justify-center items-center bg-homeBlue">
      {page1 && <OnBoarding1/>}
    </div>
  );
};

export default OnBoarding;
