import logo from "@assets/Icon Logo.svg";
import iconloc from "@assets/locationgrey.png";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="mt-8 min-h-60 overflow-hidden">
      <div className="flex md:flex-row flex-col justify-between gap-4 my-6 px-8">
        <div className="flex flex-row gap-2">
          <img src={logo} alt="logo properly" className="my-auto h-8" />
          <p className="my-auto p-0 font-semibold text-xl">Properly.</p>
        </div>
        <ul className="border-2 p-2 border-blue-500 rounded-2xl text-blue-500 list-disc list-inside">
          <li>Properly Indonesia</li>
        </ul>
        <div className="flex">
          <img src={iconloc} alt="" className="my-auto mr-2 w-4" />
          <p className="my-auto font-medium text-gray-500 text-lg">
            Yogyakarta, Bali
          </p>
        </div>
      </div>
      <div className="md:block lg:block xl:block relative bg-footer-top align-text-bottom justify-center items-center hidden bg-footer-bot w-screen min-h-96 text-center text-white overflow-hidden">
        <svg viewBox="0 0 100 60" width="100%" height="auto">
          <defs>
            <mask id="mask" x="0" y="0" width="100%" height="50%">
              <rect x="0" y="0" width="100" height="30" fill="#ffffff" />
              <text
                text-anchor="middle"
                x="50"
                y="33"
                dy="0"
                font-size="12px"
                fill="black"
              >
                PROPERLY
              </text>
            </mask>
          </defs>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            mask="url(#mask)"
            fill="white"
          />
        </svg>
        <p className="font-bold">
          &copy; <span id="year">2024</span>. All rights reserved. Powered by
          MadeIndonesia
        </p>
      </div>
      <p className="block md:hidden font-bold text-black text-center">
        &copy; <span id="year">2024</span>. All rights reserved. Powered by
        MadeIndonesia
      </p>
    </footer>
  );
};

export default Footer;
