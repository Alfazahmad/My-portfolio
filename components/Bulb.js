// import Image from "next/image";

// const Bulb = () => {
//   return (
//     <div className="absolute -left-36 -bottom-12 to rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
//       <Image
//         src={"/bulb.png"}
//         width={260}
//         height={200}
//         className="w-full h-full"
//         alt=""
//       />
//     </div>
//   );
// };

// export default Bulb;
import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-150 z-10 w-[200px] xl:w-[260px]">
      <Image
        src="/bulb.png"
        width={260}
        height={200}
        className="w-full h-full"
        alt="A glowing lightbulb illustration"
      />
    </div>
  );
};

export default Bulb;
