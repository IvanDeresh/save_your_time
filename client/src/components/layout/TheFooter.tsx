import { useState } from "react";
import Button from "../shared/Button";

const TheFooter = () => {
  const [email, setEmail] = useState("");
  return (
    <footer>
      <ul>
        <div className="flex justify-center gap-2">
          <div className="flex flex-col items-start">
            <label htmlFor="#footer__input">Email</label>
            <input
              id="#footer__input"
              className="outline-black pl-1 border-2 h-8 rounded-md placeholder-black"
              type="email"
              name="email"
              value={email}
              placeholder="example@gmail.com"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <Button label="Subscribe" />
        </div>
      </ul>
      <ul>
        <h2></h2>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul>
        <h2></h2>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul>
        <h2></h2>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </footer>
  );
};

export default TheFooter;
