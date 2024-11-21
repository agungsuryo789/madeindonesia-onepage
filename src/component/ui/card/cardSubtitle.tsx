interface CardSubtitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardSubtitle: React.FC<CardSubtitleProps> = ({ children }) => {
  return <div className="my-2 text-base text-gray-500">{children}</div>;
};

export default CardSubtitle;
