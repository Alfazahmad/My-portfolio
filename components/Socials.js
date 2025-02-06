// import Link from "next/link";
// import {
//   RiYoutubeLine,
//   RiInstagramLine,
//   RiFacebookLine,
//   RiDribbbleLine,
//   RiBehanceLine,
//   RiPinterestLine,
// } from "react-icons/ri";

// const Socials = () => {
//   return (
//     <div className="flex items-center gap-x-5 text-lg ">
//       <Link href={"https://www.youtube.com/@AlfazAhmadIndia"} className="hover:text-accent transition-all duration-300">
//         <RiYoutubeLine />
//       </Link>
//       <Link href={"https://www.instagram.com/alfazahmad00/"} className="hover:text-accent transition-all duration-300">
//         <RiInstagramLine />
//       </Link>
//       <Link href={"https://www.facebook.com/"} className="hover:text-accent transition-all duration-300">
//         <RiFacebookLine />
//       </Link>
//       <Link href={"https://x.com/AlfazAhmad0"} className="hover:text-accent transition-all duration-300">
//         <RiDribbbleLine />
//       </Link>
//       <Link href={"https://www.reddit.com/user/Both_Yogurtcloset656/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"} className="hover:text-accent transition-all duration-300">
//         <RiBehanceLine />
//       </Link>
//       <Link href={"https://pin.it/78IjvGKo5"} className="hover:text-accent transition-all duration-300">
//         <RiPinterestLine />
//       </Link>
//     </div>
//   );
// };

// export default Socials;

import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiRedditLine, // Import Reddit icon
  // Import X icon
  RiPinterestLine,
} from "react-icons/ri";

import { FaDiscord, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import Discord, Twitter (X), and LinkedIn icons


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg ">
      <Link
        href={"https://www.linkedin.com/in/alfaz-ahmad-ba57a1188/"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaLinkedin className="text-2xl" />{" "}
        {/* LinkedIn Icon with larger size */}
      </Link>
      <Link
        href={"https://www.youtube.com/@AlfazAhmadIndia"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={"https://www.instagram.com/alfazahmad00/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://discord.com/yourserver"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaDiscord /> {/* Discord Icon */}
      </Link>
      <Link
        href={
          "https://www.reddit.com/user/Both_Yogurtcloset656/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
        }
        className="hover:text-accent transition-all duration-300"
      >
        <RiRedditLine /> {/* Reddit Icon */}
      </Link>
      <Link
        href={"https://x.com/AlfazAhmad0"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaTwitter /> {/* X (formerly Twitter) Icon */}
      </Link>
      <Link
        href={"https://pin.it/78IjvGKo5"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
