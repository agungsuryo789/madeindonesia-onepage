interface CardImageProps {
  src: string;
}

const CardImage: React.FC<CardImageProps> = ({ src }) => {
  return (
    <div className="overflow-hidden">
      <img src={src} alt="" className="w-full h-auto hover:scale-110 transition duration-300 delay-150" />
    </div>
  );
};

export default CardImage;
