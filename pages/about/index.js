// import React, { useState } from "react";

// import {
//   FaHtml5,
//   FaCss3,
//   FaJs,
//   FaReact,
//   FaWordpress,
//   FaFigma,
// } from "react-icons/fa";

// import {
//   SiNextdotjs,
//   SiFramer,
//   SiAdobexd,
//   SiAdobephotoshop,
// } from "react-icons/si";

// //  data
// const aboutData = [
//   {
//     title: "skills",
//     info: [
//       {
//         title: "Web Development",
//         icons: [
//           <FaHtml5 />,
//           <FaCss3 />,
//           <FaJs />,
//           <FaReact />,
//           <SiNextdotjs />,
//           <SiFramer />,
//           <FaWordpress />,
//         ],
//       },
//       {
//         title: "UI/UX Design",
//         icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
//       },
//     ],
//   },
//   {
//     title: "awards",
//     info: [
//       {
//         title: "Webby Awards - Honoree",
//         stage: "2011 - 2012",
//       },
//       {
//         title: "Adobe Design Achievement Awards - Finalist",
//         stage: "2009 - 2010",
//       },
//     ],
//   },
//   {
//     title: "experience",
//     info: [
//       {
//         title: "UX/UI Designer - XYZ Company",
//         stage: "2012 - 2023",
//       },
//       {
//         title: "Web Developer - ABC Agency",
//         stage: "2010 - 2012",
//       },
//       {
//         title: "Intern - DEF Corporation",
//         stage: "2008 - 2010",
//       },
//     ],
//   },
//   {
//     title: "credentials",
//     info: [
//       {
//         title: "Web Development - ABC University, LA, CA",
//         stage: "2011",
//       },
//       {
//         title: "Computer Science Diploma - AV Technical Institute",
//         stage: "2009",
//       },
//       {
//         title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
//         stage: "2006",
//       },
//     ],
//   },
// ];
// import Avatar from "../../components/Avatar";
// import Circles from "../../components/Circles";

// import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";
// import CountUp from "react-countup";
// const About = () => {
//   const [index, setIndex] = useState(0);
//   console.log(index);

//   return (
//     <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
//       <Circles />
//       {}
//       <motion.div
//         variants={fadeIn("right", 0.2)}
//         initial="hidden"
//         animate="show"
//         exit="hidden"
//         className="hidden xl:flex absolute bottom-0 -left-[370px]"
//       >
//         <Avatar />
//       </motion.div>

//       <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ">
//         <div className="flex-1 flex flex-col justify-center">
//           <motion.h2
//             variants={fadeIn("right", 0.2)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="h2"
//           >
//             Building <span className="text-accent">Intelligence </span>
//              with Data
//           </motion.h2>
//           <motion.p
//             variants={fadeIn("right", 0.4)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="max-w-[500px] mx-auto xl:mx-0 mb-12 px-2 xl:px-0"
//           >
//             An aspiring Machine Learning Engineer with a strong foundation in
//             Python, mathematics, and problem-solving. Currently pursuing my
//             Bachelor’s at Marwari College, Ranchi, I am deeply passionate about
//             AI and data-driven solutions. My goal is to master ML algorithms,
//             statistical modeling, and real-world applications while continuously
//             improving my coding skills. With a keen interest in turning data
//             into meaningful insights, I am actively working on projects and
//             seeking opportunities to grow in the field of machine learning.
//           </motion.p>

//           <motion.div
//             variants={fadeIn("right", 0.6)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
//           >
//             <div className="flex flex-1 xl:gap-x-6">
//               <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
//                 <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//                   <CountUp start={0} end={10} duration={5} />+
//                 </div>
//                 <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
//                   Years fo experience
//                 </div>
//               </div>

//               <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
//                 <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//                   <CountUp start={0} end={250} duration={5} />+
//                 </div>
//                 <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
//                   Satistfied clients
//                 </div>
//               </div>

//               <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
//                 <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//                   <CountUp start={0} end={650} duration={5} />+
//                 </div>
//                 <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
//                   Finised projects
//                 </div>
//               </div>

//               <div className="relative flex-1 ">
//                 <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//                   <CountUp start={0} end={8} duration={5} />+
//                 </div>
//                 <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
//                   Winning awards
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//         <motion.div
//           variants={fadeIn("left", 0.4)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
//         >
//           <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
//             {aboutData.map((item, itemIndex) => {
//               return (
//                 <div
//                   key={itemIndex}
//                   className={`${
//                     index === itemIndex &&
//                     "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
//                   }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
//                   onClick={() => setIndex(itemIndex)}
//                 >
//                   {item.title}
//                 </div>
//               );
//             })}
//           </div>
//           <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y--4 items-center xl:items-start">
//             {aboutData[index].info.map((item, itemIndex) => {
//               return (
//                 <div
//                   key={itemIndex}
//                   className="flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
//                 >
//                   <div className="font-light mb-2 md:mb-0">{item.title}</div>
//                   <div className="hidden md:flex">-</div>
//                   <div>{item.stage}</div>
//                   <div className="flex gap-x-4">
//                     {" "}
//                     {item.icons?.map((icon, iconIndex) => {
//                       return <div className="text-2l text-white">{icon}</div>;
//                     })}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default About;



import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

// Data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="xd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      { title: "Webby Awards - Honoree", stage: "2011 - 2012" },
      { title: "Adobe Design Achievement Awards - Finalist", stage: "2009 - 2010" },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "UX/UI Designer - XYZ Company", stage: "2012 - 2023" },
      { title: "Web Developer - ABC Agency", stage: "2010 - 2012" },
      { title: "Intern - DEF Corporation", stage: "2008 - 2010" },
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "Web Development - ABC University, LA, CA", stage: "2011" },
      { title: "Computer Science Diploma - AV Technical Institute", stage: "2009" },
      { title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA", stage: "2006" },
    ],
  },
];

// CountUp Values
const stats = [
  { value: 10, label: "Years of experience" },
  { value: 250, label: "Satisfied clients" },
  { value: 650, label: "Finished projects" },
  { value: 8, label: "Winning awards" },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      
      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building <span className="text-accent">Intelligence</span> with Data
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-12 px-2 xl:px-0"
          >
            An aspiring Machine Learning Engineer with a strong foundation in
            Python, mathematics, and problem-solving. Currently pursuing my
            Bachelor’s at Marwari College, Ranchi, I am deeply passionate about
            AI and data-driven solutions. My goal is to master ML algorithms,
            statistical modeling, and real-world applications while continuously
            improving my coding skills.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {stats.map((stat, i) => (
                <div key={i} className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={stat.value} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${
                  index === itemIndex ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300" : ""
                }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                {item.stage && (
                  <>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                  </>
                )}
                {item.icons && (
                  <div className="flex gap-x-4">
                    {item.icons.map((icon, iconIndex) => (
                      <div key={iconIndex} className="text-2xl text-white">{icon}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
