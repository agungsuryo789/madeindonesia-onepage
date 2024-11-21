import React, { ButtonHTMLAttributes } from "react";

interface ButtonBlueProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ButtonBlue: React.FC<ButtonBlueProps> = ({ children, ...props }) => {
  return (
    <button className="bg-blue-500 px-6 py-4 rounded-lg text-white" {...props}>
      {children}
    </button>
  );
};

export default ButtonBlue;
