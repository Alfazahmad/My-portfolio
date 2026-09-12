
import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiRedditLine,
} from "react-icons/ri";

import {
  FaDiscord,
  FaTwitter,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://www.linkedin.com/in/alfaz-ahmad-990803430?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-2xl" />
      </Link>

      <Link
        href="https://www.youtube.com/@AlfazAhmadIndia"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
        aria-label="YouTube"
      >
        <RiYoutubeLine />
      </Link>

      <Link
        href="https://www.instagram.com/alfazahmad0?stkn=eGFybWdiZWlwZWZi"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
        aria-label="Instagram"
      >
        <RiInstagramLine />
      </Link>

      <Link
        href="https://discord.com/yourserver"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
        aria-label="Discord"
      >
        <FaDiscord />
      </Link>

      <Link
        href="https://www.reddit.com/user/Both_Yogurtcloset656/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
        aria-label="Reddit"
      >
        <RiRedditLine />
      </Link>

      <Link
        href="https://x.com/AlfazAhmad0"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
        aria-label="X"
      >
        <FaTwitter />
      </Link>

      <Link
        href="https://t.me/your_telegram_username"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
        aria-label="Telegram"
      >
        <FaTelegramPlane />
      </Link>
    </div>
  );
};

export default Socials;
