// import Circles from "../../components/Circles";
// import { BsArrowRight } from "react-icons/bs";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";

// const Contact = () => {
//   return (
//     <div className="h-full bg-primary/30">
//       <div className="container mx-auto py-30 text-center xl:text-left flex items-center justify-center h-full">
//         <div className="flex flex-col w-full max-w-[700px] ">
//           <motion.h2
//             variants={fadeIn("up", 0.2)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="h2 text-center mb-12"
//           >
//             Let's <span className="text-accent">connect.</span>
//           </motion.h2>
//           <motion.form
//             variants={fadeIn("up", 0.4)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="flex-1 flex flex-col gap-6 w-full mx-auto"
//           >
//             <div className="flex gap-x-6 w-full">
//               <input type="text" placeholder="name" className="input" />
//               <input type="text" placeholder="email" className="input" />
//             </div>
//             <input type="text" placeholder="subject" className="input" />
//             <textarea placeholder=" message" className="textarea"></textarea>
//             <button
//               className="btn rounded-full border border-white/50 max-w-[170px]
//             px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
//             >
//               <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
//                 Let's talk
//               </span>
//               <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Confetti from "react-confetti";

const Contact = () => {
  const form = useRef();
  const [showConfetti, setShowConfetti] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jdso8fe", // Your EmailJS service ID
        "template_9k9293l", // Your Template ID
        form.current,
        "fTZ144YnCid-wi5FI" // Your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");

          // Show confetti animation
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3s
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset(); // Reset form fields
  };

  return (
    <div className="h-full bg-primary/30 relative">
      {/* Confetti Animation */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <div className="container mx-auto py-30 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" name="user_name" placeholder="Name" className="input" required />
              <input type="email" name="user_email" placeholder="Email" className="input" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="input" required />
            <textarea name="message" placeholder="Message" className="textarea" required></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px]
              px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
