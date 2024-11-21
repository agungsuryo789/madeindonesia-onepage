import thumbnail from "@assets/thumbnailkota.png";

const ThumbnailMap = () => {
  return (
    <div className="relative border-4 border-gray-300 rounded-lg w-20 h-20">
      <img src={thumbnail} alt="thumbnail" className="w-20 aspect-square" style={{height: '4.45rem'}} />
      <div
        className="-bottom-6 left-1/3 absolute w-0 h-0"
        style={{
          borderLeft: "12px solid transparent",
          borderRight: "12px solid transparent",
          borderTop:
            "20px solid rgb(209 213 219 / var(--tw-border-opacity, 1))",
        }}
      ></div>
    </div>
  );
};

export default ThumbnailMap;
