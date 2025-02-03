import React from "react";

const Button = ({ label, styles }: { label: string; styles?: string }) => {
  return (
    <button
      className={`${styles} border-2 rounded-md py-2 px-5 hover:shadow-2xl cursor-pointer`}
    >
      {label}
    </button>
  );
};

export default Button;
