const Footer = () => {
  return (
    <div className="footer text-white bg-darkBlue py-20">
      <div className=" footer flex space-x-20 px-8 bg-darkBlue text-white mx-auto w-3/4">
        <div className="footer-details flex flex-col space-y-4">
          <h2 className="text-4xl font-bold mb-4 -mt-4">weRide</h2>
          <a href="/">About us</a>
          <a href="/">Careers</a>
          <a href="/pricing">Press releases</a>
          <a href="/">Blog</a>
          <a href="/">Sponsorship</a>
          <a href="/">Environmental sustainability</a>
        </div>
        <div className="footer-details flex flex-col space-y-4 ">
          <h2 className="text-xl font-bold mb-4">Group Companies</h2>
          <a href="/" className="hover:text-orange-200 hover:underline">
            Elegant Rides
          </a>
          <a href="/">Priviledge Club</a>
          <a href="/">Airways Cargo</a>
          <a href="/">Trade partners</a>
          <a href="/">e-Procurement</a>
        </div>
        <div className="footer-details flex flex-col space-y-4">
          <h2 className="text-xl font-bold mb-4">Business Solutions</h2>
          <a href="/"> Corporate travel</a>
          <a href="/">Beyond Business</a>
          <a href="/">FCHC Meetings and Events</a>
        </div>
        <div className="footer-details flex flex-col space-y-4">
          <h2 className="text-xl font-bold mb-4">Global Citizenship</h2>
          <a href="/">Diversity and Inclusion</a>
          <a href="/">Safety</a>
          <a href="/">Help</a>
          <a href="/faq">FAQ</a>
        </div>
      </div>
      <div className="footer-last mt-20 flex mx-auto w-3/4 justify-between px-8">
        <div className="footer-last_left">
          <p>© 2022 weRide Technologies Inc.</p>
        </div>
        <div className="footer-last_right flex space-x-8 text-homeBlue text-md">
          <a href="/"  className="hover:underline">Privacy</a>
          <a href="/" className="hover:underline">Accesibility</a>
          <a href="/" className="hover:underline">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
