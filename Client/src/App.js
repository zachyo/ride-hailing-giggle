import OnBoarding1 from "./components/onboarding/onboarding.component";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/drive.login";
import Homepage from "./pages/homepage/homepage.component";
import Navbar from "./components/navbar";
import BookRide from "./components/booking";
import Rides from "./components/rides";
import Footer from "./components/footer";
import SignUp from "./pages/signup/signup";
import LoginR from "./pages/login/ride.login";

//mobile first webapp
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homepage/> */}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/book" element={<BookRide/>} />
        <Route path="/rides" element={<Rides/>} />
        <Route path="drive/login" element={<Login />} />
        <Route path="drive/signup" element={<SignUp/>} />
        <Route path="ride/login" element={<LoginR/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
