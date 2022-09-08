import { useRef } from "react";
import down from "../../src/assets/icons/white-down.png";

const Reviews = () => {
  const slides = [1, 2, 3, 4, 5, 6, 7];
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div className="reviews w-2/3 mx-auto py-8">
      Ride Reviews
      <div className="flex justify-center items-center">
        <div
          className="absolute left-48 slider-icon h-max left cursor-pointer opacity-50 hover:opacity-100"
          onClick={slideLeft}
        >
          <img
            src={down}
            alt=""
            className=" scale-150 rotate-90 bg-darkBlue rounded-full"
          />
        </div>
        <div
          className="slider  w-full h-full py-8 whitespace-nowrap  overflow-x-scroll"
          style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
          id="slider"
        >
          {/* //flex py-8 flex-wrap justify-center items-center */}
          {/* <div className="flex flex-col w-1/4 mx-8 items-center">
            <img src="" alt="1" />
            <p className="text-center">
              “As a student, it’s hard to complete my class work around a <br/>
              schedule. I started driving more with Lyft and realized it was the <br/>
              perfect opportunity to make money and work on my own time! Driving <br/>
              with Lyft gives me freedom in my schedule to focus on school, <br/>
              which is my main priority.”
            </p>
            <p>- Harold</p>
            <p>Driving with weRide since 2020</p>
          </div>
          <div className="flex flex-col w-1/4 mx-8 items-center">
            <img src="" alt="2" />
            <p className="text-center">
              “As a student, it’s hard to complete my class work around a
              schedule. I started driving more with Lyft and realized it was the
              perfect opportunity to make money and work on my own time! Driving
              with Lyft gives me freedom in my schedule to focus on school,
              which is my main priority.”
            </p>
            <p>- Harold</p>
            <p>Driving with weRide since 2020</p>
          </div>
          <div className="flex flex-col w-1/4 mx-8 items-center">
            <img src="" alt="3" />
            <p className="text-center">
              “As a student, it’s hard to complete my class work around a
              schedule. I started driving more with Lyft and realized it was the
              perfect opportunity to make money and work on my own time! Driving
              with Lyft gives me freedom in my schedule to focus on school,
              which is my main priority.”
            </p>
            <p>- Harold</p>
            <p>Driving with weRide since 2020</p>
          </div> */}
          {slides.map((slide, index) => {
            return (
              <div className="slider-card inline-block w-80 h-80 bg-white rounded-xl mx-2 text-center p-7">
                <img src="" alt="1" />
                <p className="text-center">
                  “As a student, it’s hard to complete my class work around a{" "}
                  <br />
                  schedule. I started driving more with Lyft and realized it was
                  the <br />
                  perfect opportunity to make money and work on my own time!
                  Driving <br />
                  with Lyft gives me freedom in my schedule to focus on school,{" "}
                  <br />
                  which is my main priority.”
                </p>
              </div>
            );
          })}
        </div>
        <div
          className="slider-icon right absolute right-48 cursor-pointer opacity-50 hover:opacity-100"
          onClick={slideRight}
        >
          <img
            src={down}
            alt=""
            className=" scale-150 -rotate-90 bg-darkBlue rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
