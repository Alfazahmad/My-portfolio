// import { useRef, useState, useEffect } from "react";
// import emailjs from "emailjs-com"; // Consider upgrading to @emailjs/browser
// import { BsArrowRight } from "react-icons/bs";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";
// import Confetti from "react-confetti";

// const Contact = () => {
//   const form = useRef();
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [isSending, setIsSending] = useState(false);
//   const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

//   // Safely get window dimensions on the client side only to prevent SSR crashes
//   useEffect(() => {
//     setWindowDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   }, []);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSending(true); // Disable button while sending to prevent double-clicks

//     emailjs
//       .sendForm(
//         // Tip: Replace these strings with process.env.NEXT_PUBLIC_... variables later
//         "service_jdso8fe", 
//         "template_9k9293l", 
//         form.current,
//         "fTZ144YnCid-wi5FI" 
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully:", result.text);
//           setIsSending(false);
          
//           // Show confetti animation
//           setShowConfetti(true);
//           setTimeout(() => setShowConfetti(false), 4000); 
          
//           // Reset form fields ONLY on successful send
//           e.target.reset(); 
//         },
//         (error) => {
//           console.log("Error sending email:", error.text);
//           setIsSending(false);
//           alert("Failed to send message. Please try again.");
//         }
//       );
//   };

//   return (
//     <div className="h-full bg-primary/30 relative">
//       {/* Confetti Animation with safe dimensions */}
//       {showConfetti && (
//         <Confetti 
//           width={windowDimensions.width} 
//           height={windowDimensions.height} 
//           recycle={false} // Stops generating new pieces so it fades out naturally
//         />
//       )}

//       {/* Fixed py-30 to py-32 */}
//       <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
//         <div className="flex flex-col w-full max-w-[700px]">
//           <motion.h2
//             variants={fadeIn("up", 0.2)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="h2 text-center mb-12"
//           >
//             Let us <span className="text-accent">connect.</span>
//           </motion.h2>

//           <motion.form
//             ref={form}
//             onSubmit={sendEmail}
//             variants={fadeIn("up", 0.4)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="flex-1 flex flex-col gap-6 w-full mx-auto"
//           >
//             <div className="flex gap-x-6 w-full">
//               <input type="text" name="user_name" placeholder="Name" className="input" required disabled={isSending} />
//               <input type="email" name="user_email" placeholder="Email" className="input" required disabled={isSending} />
//             </div>
//             <input type="text" name="subject" placeholder="Subject" className="input" required disabled={isSending} />
//             <textarea name="message" placeholder="Message" className="textarea" required disabled={isSending}></textarea>
            
//             <button
//               type="submit"
//               disabled={isSending}
//               className="btn rounded-full border border-white/50 max-w-[170px]
//               px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
//                 {isSending ? "Sending..." : "Let us talk"}
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

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser"; 
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Confetti from "react-confetti";

const Contact = () => {
  const form = useRef();
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); 

    emailjs
      .sendForm(
        "service_jdso8fe",    // <-- YOUR CORRECT SERVICE ID
        "template_9k9293l",   // <-- YOUR TEMPLATE ID
        form.current,
        "fTZ144YnCid-wi5FI"   // <-- YOUR PUBLIC KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSending(false);
          
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 4000); 
          
          e.target.reset(); 
        },
        (error) => {
          console.log("Error sending email:", error.text);
          setIsSending(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="h-full bg-primary/30 relative">
      {showConfetti && (
        <Confetti 
          width={windowDimensions.width} 
          height={windowDimensions.height} 
          recycle={false} 
        />
      )}

      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let us <span className="text-accent">connect.</span>
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
              <input type="text" name="user_name" placeholder="Name" className="input" required disabled={isSending} />
              <input type="email" name="user_email" placeholder="Email" className="input" required disabled={isSending} />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="input" required disabled={isSending} />
            <textarea name="message" placeholder="Message" className="textarea" required disabled={isSending}></textarea>
            
            <button
              type="submit"
              disabled={isSending}
              className={`btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden ${
                isSending 
                  ? "opacity-50 cursor-not-allowed" 
                  : "hover:border-accent group"
              }`}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isSending ? "Sending..." : "Let us talk"}
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
