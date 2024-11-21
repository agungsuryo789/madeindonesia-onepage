interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardBody: React.FC<CardBodyProps> = ({children}) => {
  return <div className="text-lg">{children}</div>;
};

export default CardBody;
