import OnBoarding1 from "./components/onboarding/onboarding.component";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Homepage from "./pages/homepage/homepage.component";
import Navbar from "./components/navbar";
import BookRide from "./components/booking";
import Rides from "./components/rides";
import Footer from "./components/footer";
import SignUp from "./pages/signup/signup";

//mobile first webapp
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homepage/> */}
      <Routes>
        <Route exact path="/" element={<OnBoarding1 />} />
        <Route path="/book" element={<BookRide/>} />
        <Route path="/rides" element={<Rides/>} />
        <Route path="ride/login" element={<Login />} />
        <Route path="ride/signup" element={<SignUp/>} />
        <Route path="/ride" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
