import { useState } from "react";
import Button from "../shared/Button";
import { instagram, telegram } from "../../assets/img";

const TheFooter = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t pt-5 flex flex-wrap font-extralight w-full justify-between p-5 gap-4">
      <div className="w-2/6">
        <h2 className="font-medium text-xl mb-2">Subscribe</h2>
        <div className="flex gap-2">
          <input
            className="outline-none pl-2 border rounded-sm placeholder-gray-500 w-full"
            type="email"
            name="email"
            value={email}
            placeholder="example@gmail.com"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Button label="Subscribe" />
        </div>
      </div>

      <div className="w-1/6 flex flex-col items-start">
        <h2 className="font-medium text-xl mb-2">Contacts</h2>
        <ul className="w-full flex flex-col items-start justify-center gap-1.5">
          <li>
            <a href="#">syt.support@gmail.com</a>
          </li>
          <li>
            <a href="#">+4843165978</a>
          </li>
          <li className="flex items-center gap-2">
            <img className="w-6" src={instagram} alt="Instagram" />
            <a href="#">Instagram</a>
          </li>
          <li className="flex items-center gap-2">
            <img className="w-6" src={telegram} alt="Telegram" />
            <a href="#">Telegram</a>
          </li>
        </ul>
      </div>

      <div className="w-1/6 flex flex-col items-start">
        <h2 className="font-medium text-xl mb-2">Resources</h2>
        <ul className="w-full flex flex-col items-start justify-center gap-1.5">
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/guides">Guides</a>
          </li>
          <li>
            <a href="/webinars">Webinars</a>
          </li>
          <li>
            <a href="/community">Community</a>
          </li>
        </ul>
      </div>

      <div className="w-1/6 flex flex-col items-start">
        <h2 className="font-medium text-xl mb-2">Quick Links</h2>
        <ul className="w-full flex flex-col items-start justify-center gap-1.5">
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/terms">Terms of Use</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
        </ul>
      </div>

      <div className="w-full text-center mt-5 text-sm text-gray-500">
        © 2024 Save Your Time. All Rights Reserved.
      </div>
    </footer>
  );
};

export default TheFooter;
