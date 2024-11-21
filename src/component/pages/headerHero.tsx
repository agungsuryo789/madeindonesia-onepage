import GroupInput from "@component/ui/groupInput";
import ThumbnailMap from "@component/ui/thumbnailMap";
import PopUpLocation from "@component/ui/popUpLoc";

import imagecity from "@assets/imagekota.png";

const HeaderHero = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 px-4">
      <div className="content-center col-span-5 lg:col-span-3 row-span-3 my-10 xl:my-2 text-black">
        <h3 className="my-4 font-bold text-6xl">
          Let's Find The Most{" "}
          <span className="p-0 font-bold text-6xl text-blue-400">
            Suitable Home
          </span>{" "}
          for You !
        </h3>
        <p className="my-8 text-base text-gray-500">
          We offer the best resident for you with a strategic location and the
          best home developer. Find your home right now !
        </p>
        <ul className="flex flex-row gap-4 my-10">
          <li className="flex md:flex-row flex-col py-auto text-slate-500">
            <span className="p-0 font-semibold text-3xl text-slate-500">
              29
            </span>
            <span className="ml-1 py-1">Success Partner</span>
          </li>
          <li className="flex md:flex-row flex-col py-auto text-slate-500">
            <span className="p-0 font-semibold text-3xl text-slate-500">
              92+
            </span>
            <span className="ml-1 py-1">Strategic Location</span>
          </li>
          <li className="flex md:flex-row flex-col py-auto text-slate-500">
            <span className="p-0 font-semibold text-3xl text-slate-500">
              120K
            </span>
            <span className="ml-1 py-1">Satisfied Customer</span>
          </li>
        </ul>
      </div>
      <div className="lg:block relative hidden col-span-2 row-span-2">
        <img src={imagecity} alt="image of map" className="w-fit h-auto" />
        <div className="top-1/3 left-1/4 absolute">
          <PopUpLocation />
        </div>
        <div className="top-2/3 right-20 absolute">
          <ThumbnailMap />
        </div>
        <div className="top-[15%] right-20 absolute">
          <ThumbnailMap />
        </div>
        <div className="top-[60%] left-20 absolute">
          <ThumbnailMap />
        </div>
      </div>
      <div className="content-center col-span-5 lg:col-span-3 row-span-1 h-full">
        <GroupInput />
      </div>
    </div>
  );
};

export default HeaderHero;
