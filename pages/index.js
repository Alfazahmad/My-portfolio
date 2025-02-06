// import Image from "next/image";

// import ParticlesContainer from "../components/ParticlesContainer";
// import ProjectsBtn from "../components/ProjectsBtn";
// import Avatar from "../components/Avatar";

// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

// const Home = () => {
//   return (
//     <div className="bg-primary/60 h-full ">
//       {}
//       <div className="w-full h-full bg-gradient-to-r from-primary/10 via-blacks/30 to-blacks/10">
//         <div className="text-center flex  flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
//           {}
//           <motion.h1
//             variants={fadeIn("down", 0.2)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="h1"
//           >
//            Turning data<br /> Into{" "}
//             <span className="text-accent">insights</span>
//           </motion.h1>
//           {}
//           <motion.p
//             variants={fadeIn("down", 0.3)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
//           >
//             {" "}
//             "Hi, I'm Alfaz Ahmad! Currently pursuing my Bachelor's at Marwari College, Ranchi, I am deeply passionate about machine learning and solving real-world problems with data.I am actively working towards becoming a Machine Learning Engineer.
//           </motion.p>
//           {}
//           <div className="flex justify-center xl:hidden relative">
//             <ProjectsBtn />
//           </div>
//           <motion.div
//             variants={fadeIn("down", 0.4)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="hidden xl:flex"
//           >
//             <ProjectsBtn />
//           </motion.div>
//         </div>
//       </div>

//       {}
//       <div className="w-[1200px] h-full absolute right-0 bottom-0">
//         {}
//         <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
//         {}
//         <ParticlesContainer />
//         {}
//         <motion.div
//           variants={fadeIn("up", 0.5)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           transition={{ duration: 1, ease: "easeInOut" }}
//           className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
//         >
//           <Avatar />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleDownloadClick = () => {
    setIsClicked(true);
    // Simulate a delay for the download animation
    setTimeout(() => {
      // Trigger the actual download (if needed)
      window.location.href = "/path/to/resume.pdf"; // Change with actual resume path
    }, 1000); // Delay for animation effect
  };

  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-blacks/30 to-blacks/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Turning data<br /> Into{" "}
            <span className="text-accent">insights</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            "Hi, I'm Alfaz Ahmad! Currently pursuing my Bachelor's at Marwari College, Ranchi, I am deeply passionate about machine learning and solving real-world problems with data. I am actively working towards becoming a Machine Learning Engineer."
          </motion.p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>

      {/* Add the Download Resume Button */}
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={handleDownloadClick}
          className={`bg-accent text-white px-6 py-3 rounded-lg text-lg hover:bg-accent/80 transition-all duration-300 ${
            isClicked ? "opacity-70 animate-pulse" : "hover:scale-105"
          }`}
          style={{ zIndex: 1000 }} // Make sure button stays on top
        >
          {isClicked ? "Downloading..." : "Download Resume"}
        </button>
      </div>
    </div>
  );
};

export default Home;

// Global CSS styles for the page and animation
<style jsx>{`
  @keyframes pulse-animation {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .animate-pulse {
    animation: pulse-animation 1s ease-in-out infinite;
  }
`}</style>;
