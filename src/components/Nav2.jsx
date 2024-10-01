// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [pop, setPop] = useState(false);

//   const queryParams = new URLSearchParams(location.search);
//   const userId = queryParams.get("uid");

//   console.log(userId);
  

//   return (
//     <nav className="sticky top-0 bg-gray-800 p-2 text-white">
//       <div className="flex w-full h-20 justify-between items-center px-6">
//         <div className="text-[80px]" style={{ fontFamily: "Dancing Script" }}>
//           <Link to="/">Nikah Naama</Link>
//         </div>
//         <nav>
//           <ul className="flex space-x-12 text-xl">
//             <li>
//               <Link className="hover:text-pink-700" to="/">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className="hover:text-pink-700" to="/">
//                 Logout
//               </Link>
//             </li>
//             <li
//               className="cursor-pointer hover:text-pink-700"
//               onClick={() => setPop((prev) => !prev)}
//             >
//               {pop ? (
//                 <p className="cursor-pointer text-pink-700">
//                   Contact Us &#x25BE;
//                 </p>
//               ) : (
//                 <p className="cursor-pointer text-white">Contact Us &#x25BE;</p>
//               )}
//             </li>
//             {pop && (
//               <div className="h-[100px] w-[168px] bg-gray-800 top-[70px] right-[2px] bg-opacity-95 border-2 border-gray-500 rounded-lg absolute z-20">
//                 <div className="flex items-center px-1">
//                   <img
//                     className="bg-white rounded-lg h-4 w-4"
//                     src="../../public/images/phone.png"
//                     alt="phone"
//                   />
//                   <a
//                     href="tel:+919807419006"
//                     target="_blank"
//                     className="text-[14px] pl-1 text-white hover:underline"
//                   >
//                     +91 9807419006
//                   </a>
//                 </div>
//                 <div className="flex items-center pt-1 px-1">
//                   <img
//                     className="bg-white rounded-lg h-4 w-4"
//                     src="../../public/images/whatsapp.png"
//                     alt="whatsapp"
//                   />
//                   <a
//                     href="https://wa.me/9197652088756"
//                     target="_blank"
//                     className="text-[14px] pl-1 text-white hover:underline"
//                   >
//                     +91 7652088756
//                   </a>
//                 </div>
//                 <div className="flex items-center pt-1 px-1">
//                   <img
//                     className="bg-white rounded-lg h-4 w-4"
//                     src="../../public/images/email.png"
//                     alt="email"
//                   />
//                   <a
//                     href="mailto:anis300663@gmail.com"
//                     className="text-[12px] pl-1 text-white hover:underline"
//                   >
//                     anis300663@gmail.com
//                   </a>
//                 </div>
//               </div>
//             )}
//           </ul>
//         </nav>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
