// import Image from "next/image";

// const Avatar = () => {
//   return (
//     <div className="hidden xl:flex xl:max-w-none">
//       <Image
//         src={"/new-avatar.png"}
//         width={737}
//         height={678}
//         alt=""
//         className="translate-z-0 w-full h-full"
//       />
//     </div>
//   );
// };

// export default Avatar;


import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none xl:justify-center xl:items-center">
      <Image
        src="/lnewavatar.png"
        width={737}
        height={678}
        alt="Avatar"
        className="object-contain w-full h-auto rounded-full" // Adjusted for better fit
      />
    </div>
  );
};

export default Avatar;
