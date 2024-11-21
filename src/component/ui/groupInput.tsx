import ButtonBlue from "./buttonBlue";

import iconsearch from "@assets/search-normal.png";
import icontype from "@assets/home.png";
import iconlocation from "@assets/location.png";

const GroupInput = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center md:justify-start gap-2">
      <div className="flex">
        <img
          src={iconlocation}
          alt="input location"
          className="mx-4 my-auto w-5 h-auto"
        />
        <div className="flex flex-col">
          <label className="text-gray-800" htmlFor="inputLocation">
            Location
          </label>
          <input
            id="inputLocation"
            type="text"
            placeholder="Type Your Location"
            className="focus:border-0 focus:border-white bg-white py-2"
          />
        </div>
      </div>
	  <div className="lg:block hidden my-auto text-slate-500">{'|'}</div>
      <div className="flex">
        <img
          src={icontype}
          alt="input type"
          className="mx-4 my-auto w-6 h-auto"
        />
        <div className="flex flex-col">
          <label className="text-gray-800" htmlFor="inputType">
            Type
          </label>
          <input
            id="inputType"
            type="text"
            placeholder="Select your Type"
            className="focus:border-0 focus:border-white bg-white py-2"
          />
        </div>
      </div>
      <ButtonBlue>
        <div className="flex">
          <img src={iconsearch} alt="search" className="mr-2 w-6 h-auto" />
          <p>Search</p>
        </div>
      </ButtonBlue>
    </div>
  );
};

export default GroupInput;
