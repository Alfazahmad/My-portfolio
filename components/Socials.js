import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiRedditLine,
} from "react-icons/ri";
import {
  FaDiscord,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Modern X logo

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alfaz-ahmad-990803430",
    icon: FaLinkedin,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@AlfazAhmadIndia",
    icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/alfazahmad0",
    icon: RiInstagramLine,
  },
  {
    name: "Discord",
    href: "https://discord.com/yourserver", // TODO: Update link
    icon: FaDiscord,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/Both_Yogurtcloset656/",
    icon: RiRedditLine,
  },
  {
    name: "X",
    href: "https://x.com/AlfazAhmad0",
    icon: FaXTwitter,
  },
  {
    name: "Telegram",
    href: "https://t.me/your_telegram_username", // TODO: Update link
    icon: FaTelegramPlane,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <Link
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="hover:text-accent transition-all duration-300"
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
