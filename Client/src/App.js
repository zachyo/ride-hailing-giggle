import OnBoarding1 from "./components/onboarding/onboarding.component";
import {Routes, Route} from 'react-router-dom'
import BookRide from "./components/booking/booking";
import Rides from "./components/rides/rides";
// import Homepage from "./pages/homepage/homepage.component";


//mobile first webapp
function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
      <Routes>
        <Route exact path="/" element={<OnBoarding1 />} />
        <Route path="/book" element={<BookRide />} />
        <Route path="/rides" element={<Rides />} />
      </Routes>
    </div>
  );
}

export default App;
