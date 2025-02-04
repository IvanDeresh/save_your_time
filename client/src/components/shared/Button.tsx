const Button = ({ label, styles }: { label: string; styles?: string }) => {
  return (
    <button
      className={`${styles} border rounded-sm py-2 px-5 hover:shadow-2xl cursor-pointer`}
    >
      {label}
    </button>
  );
};

export default Button;
