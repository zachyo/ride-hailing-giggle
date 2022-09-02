
const CustomButton = ({children, onClick}) => {
    return (
      <div className="custom-button">
        <button onClick={onClick} type='submit' className=" hover:border-white mr-6 rounded-full py-3 font-bold bg-darkBlue text-white text-center px-8">
          {children}
        </button>
      </div>
    );
}
 
export default CustomButton;