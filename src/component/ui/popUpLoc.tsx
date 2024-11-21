import imagecity from "@assets/thumbnailkota.png";
import iconluas from "@assets/icon luas.svg";
import iconroom from "@assets/icon room.svg";
import iconbath from "@assets/icon bath.svg";

const PopUpLocation = () => {
  return (
    <div className="relative flex border-2 border-indigo-400 bg-white rounded-md w-96 h-36">
      <img
        src={imagecity}
        alt=""
        className="mx-2 my-auto rounded-md w-24 h-32"
      />
      <div className="flex flex-col justify-center mx-auto">
        <span className="my-auto text-base text-slate-300">
          Pandeya, Yogyakarta
        </span>
        <p className="my-auto font-medium text-black text-xl">
          Palm Tree Resident
        </p>
        <ul className="flex flex-row gap-4 my-auto">
          <li className="flex gap-2 text-slate-400 text-xs">
            <img src={iconluas} alt="luas" className="w-4" />
            120m
          </li>
          <li className="flex gap-2 text-slate-400 text-xs">
            <img src={iconbath} alt="luas" className="w-4" />2 Room
          </li>
          <li className="flex gap-2 text-slate-400 text-xs">
            <img src={iconroom} alt="luas" className="w-4" />4 room
          </li>
        </ul>
      </div>
      <div
        className="-bottom-6 left-1/2 absolute w-0 h-0"
        style={{
          borderLeft: "12px solid transparent",
          borderRight: "12px solid transparent",
          borderTop:
            "20px solid rgb(129 140 248 / var(--tw-border-opacity, 1))",
        }}
      ></div>
    </div>
  );
};

export default PopUpLocation;
