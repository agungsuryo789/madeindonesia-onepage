import logo from "@assets/Icon Logo.svg";

const Navbar = () => {
  return (
    <nav className="flex md:flex-row flex-col justify-between bg-white shadow-md px-2 py-2 xl:py-8 w-full text-gray-800">
      <div className="flex flex-row gap-2 mx-auto md:mx-2 xl:mx-4 my-4 xl:my-0 text-xl">
        <img src={logo} alt="logo properly" className="my-auto h-8" />
		<p className="my-auto p-0 font-semibold text-xl">Properly.</p>
      </div>
      <ul className="flex flex-row gap-4 mx-auto md:mx-1 lg:mx-1 xl:mx-4 my-auto list-none">
        <li className="font-semibold text-lg text-sky-600 uppercase">
          About Us
        </li>
        <li className="font-semibold text-lg uppercase">Portfolio</li>
        <li className="font-semibold text-lg uppercase">Information</li>
      </ul>
    </nav>
  );
};

export default Navbar;
