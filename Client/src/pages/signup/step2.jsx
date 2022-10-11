import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const Step2 = ({handleChange, handleSubmit}) => {
  return (
    <div className="my-4">
      <p className="mb-8">
        Great! We'll need some information from you to get started.
      </p>
      <div className="flex flex-wrap">
        <FormInput
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
          className="rounded-lg w-72 p-3 shadow-lg mt-3 mr-6 bg-white border border-darkBlue"
        />
        <FormInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
          className="rounded-lg w-72 p-3 shadow-lg mt-3 mr-6  bg-white border border-darkBlue"
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="rounded-lg w-72 p-3 shadow-lg mt-3  bg-white border border-darkBlue"
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="rounded-lg w-72 mr-6 p-3 shadow-lg mt-3 mb-10 bg-white border border-darkBlue"
        />
        <FormInput
          type="number"
          name="referralCode"
          placeholder="Referal Code (Optional)"
          onChange={handleChange}
          required
          className="rounded-lg w-72 p-3 shadow-lg mt-3 mb-10 bg-white border border-darkBlue"
        />
      </div>
      <CustomButton onClick={handleSubmit}>Submit</CustomButton>
    </div>
  );
};

export default Step2;
