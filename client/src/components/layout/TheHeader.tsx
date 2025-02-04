import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { logo } from "../../assets/img";

const TheHeader = () => {
  const textFromLogo = "Your Time";
  const [logoText, setLogoText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 200;
    if (isDeleting) typingSpeed = 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Додаємо літери
        setLogoText(textFromLogo.substring(0, index + 1));
        setIndex(index + 1);
      } else {
        setLogoText(textFromLogo.substring(0, index - 1));
        setIndex(index - 1);
      }

      if (index === textFromLogo.length && !isDeleting) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <header className="w-full flex items-center font-extralight">
      <div className="flex w-[40%] cursor-pointer justify-items-start items-center gap-2">
        <img className="w-10 h-10" src={logo} alt="logo for website" />
        <div className="flex flex-col max-h-10 justify-center items-start">
          <span className="h-[50%]">Save...</span>
          <span className="ml-2 h-[50%]">{logoText || "🧘🏻‍♂️"}</span>
        </div>
      </div>
      <nav className="w-[40%] flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="w-[20%] ">
        <Link
          className="border rounded-sm py-2 px-5 hover:shadow-2xl cursor-pointer"
          to="/auth/sign-in"
        >
          Sign in
        </Link>
      </div>
    </header>
  );
};

export default TheHeader;
