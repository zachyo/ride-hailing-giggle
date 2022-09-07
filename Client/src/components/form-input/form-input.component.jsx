import './form-input.styles.css'
const FormInput = ({label, HandleChange,placeholder,value, ...otherInputProps}) => {
    return (
      <div className="group relative my-1 mt-5">
        <input
          className="form-input block form-input p-3 border-2 rounded-md border-darkBlue mb-4 focus:outline-darkBlue focus:shadow-lg w-full"
          onChange={HandleChange}
          {...otherInputProps}
          placeholder={placeholder}
          pattern={otherInputProps.pattern}
          title={otherInputProps.title}
          type={otherInputProps.type}
          
        />
        {label ? (
          <label
            className={`${
              otherInputProps.value ? "shrink" : ""
            } form-input-label left-2 top-4 absolute transition-all duration-300 opacity-0 text-sm`}
          >
            {label}
          </label>
        ) : null}
      </div>
    );
}
 
export default FormInput;