import React from "react";
import { extendClass } from "@component/utils/extendClass";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  // Extend the class
  const mergedClassName = extendClass(
    `rounded-md bg-slate-50 min-w-[20rem] lg:min-w-[28rem] xl:min-w-[36rem] p-4`,
    className
  );

  return (
    <div className={mergedClassName} {...props}>
      {children}
    </div>
  );
};

export default Card;
