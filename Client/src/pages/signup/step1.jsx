// import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

const Step1 = ({ handleChange, handleStep }) => {
  return (
    <div className="my-4">
      <p className="mb-12">
        Let's start with your phone number - we'll text you a code to verify
        your phone
      </p>
      <input
        type="radio"
        name="car"
        value="true"
        id="car"
        className="mr-4"
        required
      />
      <label htmlFor="car" className="mr-16">
        I have a car
      </label>
      <input
        type="radio"
        name="car"
        value="false"
        id="noCar"
        className="mr-4"
      />
      <label htmlFor="noCar">I need a car</label>
      <FormInput
        type="number"
        name="phoneNumber"
        placeholder="Mobile Phone Number"
        onChange={handleChange}
        required
        className="rounded-lg w-96 p-3 shadow-lg mt-3 mb-10 bg-white border border-darkBlue"
      />
      <button
        className=" hover:border-white mr-6 rounded-full py-3 font-bold bg-darkBlue text-white text-center px-8"
        onClick={handleStep}
      >
        Next
      </button>
      {/* <CustomButton onClick={handleStep}>Next</CustomButton> */}
      <input type="checkbox" name="Terms of Service" id="terms" required className="mr-4"/>
      <label htmlFor="terms">
        I agree to weRide's{" "}
        <a href="terms" className="underline">
          Terms of Service
        </a>
      </label>
    </div>
  );
};

export default Step1;
