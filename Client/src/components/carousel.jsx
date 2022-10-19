import down from "../../src/assets/icons/white-down.png";
import av from '../assets/images/Avatar1.png'
import './carousel.css';
import withScrollReveal from "react-scrollreveal";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

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
  // const { animationContainerReference } = props;

  return (
    <div
      className="reviews w-2/3 mx-auto py-8"
      // ref={animationContainerReference}
    >
      <Fade left>
        <h1 className="font-bold text-4xl mb-6">Ride Reviews</h1>
      </Fade>
      <div className="flex justify-center items-center">
        <div
          className="absolute left-48 slider-icon cursor-pointer opacity-50 hover:opacity-100"
          onClick={slideLeft}
        >
          <img
            src={down}
            alt=""
            className=" scale-150 rotate-90 bg-darkBlue rounded-full"
          />
        </div>
        <div
          className="slider  w-full h-full py-8 flex  overflow-x-scroll"
          id="slider"
        > 
          {slides.map((slide, index) => {
            return (
              <Fade left>
                <div className="slider-card inline-block bg-white rounded-xl mx-2 text-center p-2">
                  <img src={av} alt="1" className="mx-auto" />
                  <p className="mt-4 w-64">
                    “As a student, it’s hard to complete my class work around a
                    schedule. I started driving more with Lyft and realized it
                    was perfect opportunity to make money and work on my own
                    time! Driving with Lyft gives me freedom in my schedule to
                    focus on school, which is my main priority.”
                  </p>
                  <p className="mt-4">
                    <b>- Harold</b>
                  </p>
                  <p>Driving with weRide since 2020</p>
                </div>
              </Fade>
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

export default withScrollReveal([
  {
    selector: '.sr-item',
    options: {
      reset: true,
    },
  },
  {
    selector: '.sr-item--sequence',
    options: {
      reset: true,
      delay: 400,
    },
    interval: 100
  }
])(Reviews)

// export default Reviews;
