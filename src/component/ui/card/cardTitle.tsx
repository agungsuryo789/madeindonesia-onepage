interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
  }
  
  const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
	return <div className="my-2 font-medium text-2xl text-gray-800">{children}</div>;
  };
  
  export default CardTitle;
  