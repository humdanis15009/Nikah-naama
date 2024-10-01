// import { useForm } from "react-hook-form";
// import PropTypes from "prop-types";
// import { auth } from "../Firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate, Link } from "react-router-dom";
// import { useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../Firebase"; // Import your Firestore instance

// Login.propTypes = {
//   onRegister: PropTypes.func.isRequired,
// };

// function Login({ onRegister }) {
//   const {
//     register,
//     handleSubmit,
//     setError,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const validateInput = (value) => {
//     const phonePattern = /^\d{10}$/;
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (phonePattern.test(value)) {
//       return true;
//     }
//     if (emailPattern.test(value) && value.length >= 3) {
//       return true;
//     }
//     return "Input must be a valid 10-digit phone number or a valid email address with at least 3 characters";
//   };

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         data.email,
//         data.password
//       );
//       const user = userCredential.user;

//       // Fetch user data from Firestore
//       const userDoc = doc(db, "Biodata", user.uid);
//       const userSnap = await getDoc(userDoc);

//       if (userSnap.exists()) {
//         const userData = userSnap.data();

//         if (!userData.hasOwnProperty("firstName"))
//           navigate(`/Form1?uid=${user.uid}`);
//         else if (!userData.hasOwnProperty("country"))
//           navigate(`/Form2?uid=${user.uid}`);
//         else if (!userData.hasOwnProperty("familyType"))
//           navigate(`/Form3?uid=${user.uid}`);
//         else if (!userData.hasOwnProperty("imageUrls"))
//           navigate(`/Verify?uid=${user.uid}`);
//         else if (
//           userData.hasOwnProperty("imageUrls") &&
//           !userData.hasOwnProperty("verifiedEmail")
//         )
//           navigate(`/Verify?uid=${user.uid}`);
//         else if (userData.hasOwnProperty("verifiedEmail"))
//           navigate(`/UserCardList?uid=${user.uid}`);

//         console.log("User data:", userData);
//         // You can use this data as needed
//         // For example, save it in state or navigate with the data
//       } else {
//         console.log("No such document!");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//       if (error.code === "auth/user-not-found") {
//         setError("email", {
//           type: "manual",
//           message: "No user found with this email",
//         });
//       } else if (error.code === "auth/wrong-password") {
//         setError("password", { type: "manual", message: "Incorrect password" });
//       } else {
//         setError("general", { type: "manual", message: error.message });
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex absolute w-full h-screen text-white justify-center items-center mt-28 object-cover">
//       <div className="h-[61vh] w-[35vw] bg-black bg-opacity-40 rounded-lg transition-opacity duration-500 ease-in-out">
//         <h1
//           style={{ fontFamily: "Dancing Script" }}
//           className="text-center text-4xl pt-4 pb-2 font-extrabold"
//         >
//           Welcome back! Please Login
//         </h1>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Form fields for email/mobile and password */}
//           <div className="flex flex-col m-3 px-4">
//             <label className="font-bold text-xl mb-2" htmlFor="email">
//               Email / Mobile No:
//             </label>
//             <input
//               className="h-10 text-gray-800 rounded-lg text-[18px] px-2 border-gray-300 border-2 focus:border-pink-600 focus:ring-0 transition-all duration-300 ease-in-out"
//               type="text"
//               id="email"
//               {...register("email", {
//                 required: "Email is required",
//                 validate: validateInput,
//                 minLength: {
//                   value: 6,
//                   message: "Mobile number cannot be less than 10 digits",
//                 },
//               })}
//               placeholder="abc@example.com / Number"
//             />
//           </div>

//           <div className="flex flex-col m-3 px-4">
//             <label className="font-bold text-xl mb-2" htmlFor="password">
//               Password:
//             </label>
//             <input
//               className="h-10 text-gray-800 rounded-lg text-[18px] px-2 border-gray-300 border-2 focus:border-pink-600 focus:ring-0 transition-all duration-300 ease-in-out"
//               type="password"
//               id="password"
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: {
//                   value: 8,
//                   message: "Password cannot be less than 8 characters",
//                 },
//               })}
//               placeholder="Enter your password"
//             />
//           </div>

//           <div className="flex items-center px-7">
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 {...register("stayLoggedIn")}
//                 className="form-checkbox h-4 w-4 cursor-pointer"
//               />
//               <label className="text-white pl-1 text-sm">Stay Logged in</label>
//             </div>
//             <Link
//               to="/ForgotPassword"
//               className="ml-auto text-sm text-white hover:underline"
//             >
//               Forgot Password?
//             </Link>
//           </div>

//           <div className="mt-4 px-7">
//             <button
//               type="submit"
//               className={`bg-pink-700 text-white px-4 py-2 rounded-lg font-bold w-[31vw] h-11 text-[18px] hover:bg-pink-600 transition-colors duration-300 ease-in-out ${
//                 loading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <div className="w-4 h-4 border-4 border-gray-300 border-t-4 border-t-white rounded-full animate-spin inline-block mr-2"></div>
//                   Logging in...
//                 </>
//               ) : (
//                 "Login"
//               )}
//             </button>
//             <p className="text-center text-sm py-2">OR</p>

//             <button
//               type="button" // Change to button type
//               className={`bg-pink-700 text-white px-4 py-2 rounded-lg w-[31vw] h-11 text-[18px] hover:bg-pink-600 font-bold transition-colors duration-300 ease-in-out ${
//                 loading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//               disabled={loading}
//               onClick={() => alert("Login with OTP functionality here!")}
//             >
//               "Login With OTP"
//             </button>
//           </div>

//           {/* Register option */}
//           <p className="text-xl text-center pt-4">
//             New to Nikah Naama?&nbsp;&nbsp;
//             <span
//               onClick={() => onRegister(false)}
//               className="font-bold hover:underline text-xl cursor-pointer"
//             >
//               Register Free
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

// password functionality is working fine but login after that is not working
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import {
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
// } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { auth, db } from "../Firebase"; // Import your Firebase auth and Firestore
// import { doc, getDoc } from "firebase/firestore";

// function Login({ onRegister }) {
//   const {
//     register,
//     handleSubmit,
//     setError: setFormError,
//     formState: { errors },
//   } = useForm();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [isForgotPassword, setIsForgotPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setLocalError] = useState(""); // Renamed this setError to avoid conflict

//   const validateInput = (value) => {
//     const phonePattern = /^\d{10}$/;
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (phonePattern.test(value)) return true;
//     if (emailPattern.test(value) && value.length >= 3) return true;
//     return "Input must be a valid 10-digit phone number or a valid email address with at least 3 characters";
//   };

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         data.email,
//         data.password
//       );
//       const user = userCredential.user;
//       const userDoc = doc(db, "Biodata", user.uid);
//       const userSnap = await getDoc(userDoc);

//       if (userSnap.exists()) {
//         const userData = userSnap.data();
//         if (!userData.firstName) navigate(`/Form1?uid=${user.uid}`);
//         else if (!userData.country) navigate(`/Form2?uid=${user.uid}`);
//         else if (!userData.familyType) navigate(`/Form3?uid=${user.uid}`);
//         else if (!userData.imageUrls || !userData.verifiedEmail)
//           navigate(`/Verify?uid=${user.uid}`);
//         else navigate(`/UserCardList?uid=${user.uid}`);
//       } else {
//         console.log("No such document!");
//       }
//     } catch (error) {
//       if (error.code === "auth/user-not-found") {
//         setFormError("email", {
//           type: "manual",
//           message: "No user found with this email",
//         });
//       } else if (error.code === "auth/wrong-password") {
//         setFormError("password", {
//           type: "manual",
//           message: "Incorrect password",
//         });
//       } else {
//         setFormError("general", { type: "manual", message: error.message });
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePasswordReset = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
//     setLocalError(""); // Set local error state

//     try {
//       await sendPasswordResetEmail(auth, email);
//       setMessage("Password reset email sent! Check your inbox.");
//       setTimeout(() => {
//         setIsForgotPassword(false); // Return to login form after sending the reset email
//       }, 3000);
//     } catch (error) {
//       setLocalError("Failed to send password reset email. Please try again."); // Set error in local state
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex absolute w-full h-screen text-white justify-center items-center mt-28 object-cover">
//       <div className="h-[61vh] w-[35vw] bg-black bg-opacity-40 rounded-lg transition-opacity duration-500 ease-in-out">
//         {!isForgotPassword ? (
//           <>
//             <h1
//               style={{ fontFamily: "Dancing Script" }}
//               className="text-center text-4xl pt-4 pb-2 font-extrabold"
//             >
//               Welcome back! Please Login
//             </h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               {/* Email/Mobile input */}
//               <div className="flex flex-col m-3 px-4">
//                 <label className="font-bold text-xl mb-2" htmlFor="email">
//                   Email / Mobile No:
//                 </label>
//                 <input
//                   className="h-10 text-gray-800 rounded-lg text-[18px] px-2 border-gray-300 border-2 focus:border-pink-600 focus:ring-0"
//                   type="text"
//                   id="email"
//                   {...register("email", {
//                     required: "Email is required",
//                     validate: validateInput,
//                   })}
//                   placeholder="abc@example.com / Number"
//                 />
//               </div>
//               {/* Password input */}
//               <div className="flex flex-col m-3 px-4">
//                 <label className="font-bold text-xl mb-2" htmlFor="password">
//                   Password:
//                 </label>
//                 <input
//                   className="h-10 text-gray-800 rounded-lg text-[18px] px-2 border-gray-300 border-2 focus:border-pink-600 focus:ring-0"
//                   type="password"
//                   id="password"
//                   {...register("password", {
//                     required: "Password is required",
//                     minLength: 8,
//                   })}
//                   placeholder="Enter your password"
//                 />
//               </div>
//               {/* Forgot password link */}
//               <div className="flex items-center px-7">
//                 <a
//                   href="#"
//                   onClick={() => setIsForgotPassword(true)}
//                   className="ml-auto text-sm text-white hover:underline"
//                 >
//                   Forgot Password?
//                 </a>
//               </div>
//               {/* Submit Button */}
//               <div className="mt-4 px-7">
//                 <button
//                   type="submit"
//                   className={`bg-pink-700 text-white px-4 py-2 rounded-lg font-bold w-[31vw] h-11 text-[18px] hover:bg-pink-600 transition-colors duration-300 ease-in-out ${
//                     loading ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                   disabled={loading}
//                 >
//                   {loading ? "Logging in..." : "Login"}
//                 </button>
//               </div>
//             </form>
//           </>
//         ) : (
//           <>
//             <h1
//               style={{ fontFamily: "Dancing Script" }}
//               className="text-center text-4xl pt-4 pb-2 font-extrabold"
//             >
//               Forgot Password?
//             </h1>
//             <form onSubmit={handlePasswordReset}>
//               <div className="flex flex-col m-3 px-4">
//                 <label className="font-bold text-xl mb-2" htmlFor="email">
//                   Enter your Email:
//                 </label>
//                 <input
//                   className="h-10 text-gray-800 rounded-lg text-[18px] px-2 border-gray-300 border-2 focus:border-pink-600 focus:ring-0"
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="abc@example.com"
//                   required
//                 />
//               </div>

//               {message && (
//                 <p className="text-center text-green-500">{message}</p>
//               )}
//               {error && <p className="text-center text-red-500">{error}</p>}
//               <div className="mt-4 px-7">
//                 <button
//                   type="submit"
//                   className={`bg-pink-700 text-white px-4 py-2 rounded-lg font-bold w-[31vw] h-11 text-[18px] hover:bg-pink-600 transition-colors duration-300 ease-in-out ${
//                     loading ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                   disabled={loading}
//                 >
//                   {loading ? "Sending Email..." : "Send Reset Email"}
//                 </button>
//               </div>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;

// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import {
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
// } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { auth, db } from "../Firebase"; // Import Firebase auth and Firestore
// import {
//   doc,
//   getDoc,
//   query,
//   where,
//   collection,
//   getDocs,
// } from "firebase/firestore";

// function Login({ onRegister }) {
//   const {
//     register,
//     handleSubmit,
//     setError: setFormError,
//     formState: { errors },
//   } = useForm();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [isForgotPassword, setIsForgotPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setLocalError] = useState("");

//   // Validate email or mobile number input
//   const validateInput = (value) => {
//     const phonePattern = /^\d{10}$/;
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (phonePattern.test(value)) return true;
//     if (emailPattern.test(value) && value.length >= 3) return true;
//     return "Input must be a valid 10-digit phone number or a valid email address with at least 3 characters";
//   };

//   // Fetch user data from Firestore by email
//   const fetchUserByEmail = async (email) => {
//     const usersCollection = collection(db, "Biodata"); // Assuming users are stored in "Biodata" collection
//     const q = query(usersCollection, where("email", "==", email));
//     const querySnapshot = await getDocs(q);
//     if (!querySnapshot.empty) {
//       return querySnapshot.docs[0].data(); // Get the first user match
//     } else {
//       return null; // No user found
//     }
//   };

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const userData = await fetchUserByEmail(data.email);
//       if (!userData) {
//         // No user found with this email
//         setFormError("email", {
//           type: "manual",
//           message: "No user found with this email",
//         });
//       } else {
//         // Compare entered password with Firestore-stored password
//         if (userData.password === data.password) {
//           const userCredential = await signInWithEmailAndPassword(
//             auth,
//             data.email,
//             data.password
//           );
//           const user = userCredential.user;
//           // Navigate to UserCardList or any other route based on user data
//           navigate(`/UserCardList?uid=${user.uid}`);
//         } else {
//           // Incorrect password
//           setFormError("password", {
//             type: "manual",
//             message: "Password does not match",
//           });
//         }
//       }
//     } catch (error) {
//       setFormError("general", { type: "manual", message: error.message });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePasswordReset = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await sendPasswordResetEmail(auth, email);
//       setMessage("Password reset email sent successfully.");
//       setError("");
//     } catch (error) {
//       setMessage("");
//       setLocalError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex absolute w-full h-screen text-white justify-center items-center mt-28 object-cover">
//       <div className="h-[61vh] w-[35vw] bg-black bg-opacity-40 rounded-lg transition-opacity duration-500 ease-in-out">
//         {!isForgotPassword ? (
//           <>
//             <h1
//               style={{ fontFamily: "Dancing Script" }}
//               className="text-center text-4xl pt-4 pb-2 font-extrabold"
//             >
//               Welcome back! Please Login
//             </h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               {/* Email/Mobile input */}
//               <div className="flex flex-col m-3 px-4">
//                 <label className="font-bold text-xl mb-2" htmlFor="email">
//                   Email / Mobile No:
//                 </label>
//                 <input
//                   className="h-10 text-gray-800 rounded-lg text-[18px] px-2 border-gray-300 border-2 focus:border-pink-600 focus:ring-0"
//                   type="text"
//                   id="email"
//                   {...register("email", {
//                     required: "Email is required",
//                     validate: validateInput,
//                   })}
//                   placeholder="abc@example.com / Number"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>
//               {/* Password input */}
//               <div className="flex flex-col m-3 px-4">
//                 <label className="font-bold text-xl mb-2" htmlFor="password">
//                   Password:
//                 </label>
//                 <input
//                   className="h-10 text-gray-800 rounded-lg text-[18px] px-2 border-gray-300 border-2 focus:border-pink-600 focus:ring-0"
//                   type="password"
//                   id="password"
//                   {...register("password", {
//                     required: "Password is required",
//                     minLength: {
//                       value: 8,
//                       message: "Password must be at least 8 characters long",
//                     },
//                   })}
//                   placeholder="Enter your password"
//                 />
//                 {errors.password && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.password.message}
//                   </p>
//                 )}
//               </div>
//               {/* Forgot password link */}
//               <div className="flex items-center px-7">
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     {...register("stayLoggedIn")}
//                     className="form-checkbox h-4 w-4 cursor-pointer"
//                   />
//                   <label className="text-white pl-1 text-sm">
//                     Stay Logged in
//                   </label>
//                 </div>
//                 <a
//                   href="#"
//                   onClick={() => setIsForgotPassword(true)}
//                   className="ml-auto text-sm text-white hover:underline"
//                 >
//                   Forgot Password?
//                 </a>
//               </div>
//               {/* Submit Button */}
//               <div className="mt-4 px-7">
//                 <button
//                   type="submit"
//                   className={`bg-pink-700 text-white px-4 py-2 rounded-lg font-bold w-[31vw] h-11 text-[18px] hover:bg-pink-600 transition-colors duration-300 ease-in-out ${
//                     loading ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                   disabled={loading}
//                 >
//                   {loading ? "Logging in..." : "Login"}
//                 </button>
//               </div>
//             </form>
//           </>
//         ) : (
//           <>
//             <h1
//               style={{ fontFamily: "Dancing Script" }}
//               className="text-center text-4xl pt-4 pb-2 font-extrabold"
//             >
//               Forgot Password?
//             </h1>
//             <form onSubmit={handlePasswordReset}>
//               <div className="flex flex-col m-3 px-4">
//                 <label className="font-bold text-xl mb-2" htmlFor="email">
//                   Enter your Email:
//                 </label>
//                 <input
//                   className="h-10 text-gray-800 rounded-lg text-[18px] px-2 border-gray-300 border-2 focus:border-pink-600 focus:ring-0"
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="abc@example.com"
//                   required
//                 />
//               </div>
//               {message && (
//                 <p className="text-center text-green-500">{message}</p>
//               )}
//               {error && <p className="text-center text-red-500">{error}</p>}
//               <div className="mt-4 px-7">
//                 <button
//                   type="submit"
//                   className={`bg-pink-700 text-white px-4 py-2 rounded-lg font-bold w-[31vw] h-11 text-[18px] hover:bg-pink-600 transition-colors duration-300 ease-in-out ${
//                     loading ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                   disabled={loading}
//                 >
//                   {loading ? "Sending Email..." : "Send Reset Email"}
//                 </button>
//               </div>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase";
import {
  doc,
  getDoc,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";

function Login({ onRegister }) {
  const {
    register,
    handleSubmit,
    setError: setFormError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setLocalError] = useState(""); // Renamed this setError to avoid conflict

  const validateInput = (value) => {
    const phonePattern = /^\d{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (phonePattern.test(value)) return true;
    if (emailPattern.test(value) && value.length >= 3) return true;
    return "Input must be a valid 10-digit phone number or a valid email address with at least 3 characters";
  };

  const fetchUserByEmail = async (email) => {
    const usersCollection = collection(db, "Biodata"); // Assuming users are stored in "users" collection
    const q = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data(); // Assuming you get the first user match
    } else {
      return null; // No user found
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      const userDoc = doc(db, "Biodata", user.uid);
      const userSnap = await getDoc(userDoc);
      ``;
      if (userSnap.exists()) {
        const userData = userSnap.data();
        if (!userData.firstName) navigate(`/Form1?uid=${user.uid}`);
        else if (!userData.country) navigate(`/Form2?uid=${user.uid}`);
        else if (!userData.familyType) navigate(`/Form3?uid=${user.uid}`);
        else if (!userData.imageUrls || !userData.verifiedEmail)
          navigate(`/Verify?uid=${user.uid}`);
        else navigate(`/UserCardList?uid=${user.uid}`);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setFormError("email", {
          type: "manual",
          message: "No user found with this email",
        });
      } else if (error.code === "auth/wrong-password") {
        setFormError("password", {
          type: "manual",
          message: "Incorrect password",
        });
      } else {
        setFormError("general", { type: "manual", message: error.message });
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setLocalError(""); // Set local error state

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
      setTimeout(() => {
        setIsForgotPassword(false); // Return to login form after sending the reset email
      }, 3000);
    } catch (error) {
      setLocalError("Failed to send password reset email. Please try again."); // Set error in local state
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex absolute w-full h-screen text-white justify-center items-center mt-28 object-cover">
      <div className="h-[61vh] w-[35vw] bg-black bg-opacity-40 rounded-lg transition-opacity duration-500 ease-in-out">
        {!isForgotPassword ? (
          <>
            <h1
              style={{ fontFamily: "Dancing Script" }}
              className="text-center text-4xl pt-4 pb-2 font-extrabold"
            >
              Welcome back! Please Login
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email/Mobile input */}
              <div className="flex flex-col m-3 px-4">
                <label className="font-bold text-xl mb-2" htmlFor="email">
                  Email / Mobile No:
                </label>
                <input
                  className="h-10 text-gray-800 rounded-lg text-[18px] px-2 border-gray-300 border-2 focus:border-pink-600 focus:ring-0"
                  type="text"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    validate: validateInput,
                  })}
                  placeholder="abc@example.com / Number"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* Password input */}
              <div className="flex flex-col m-3 px-4">
                <label className="font-bold text-xl mb-2" htmlFor="password">
                  Password:
                </label>
                <input
                  className="h-10 text-gray-800 rounded-lg text-[18px] px-2 border-gray-300 border-2 focus:border-pink-600 focus:ring-0"
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center px-7">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("stayLoggedIn")}
                    className="form-checkbox h-4 w-4 cursor-pointer"
                  />
                  <label className="text-white pl-1 text-sm">
                    Stay Logged in
                  </label>
                </div>
                <a
                  href="#"
                  onClick={() => setIsForgotPassword(true)}
                  className="ml-auto text-sm text-white hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              {/* Submit Button */}
              <div className="mt-4 px-7">
                <button
                  type="submit"
                  className={`bg-pink-700 text-white px-4 py-2 rounded-lg font-bold w-[31vw] h-11 text-[18px] hover:bg-pink-600 transition-colors duration-300 ease-in-out ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h1
              style={{ fontFamily: "Dancing Script" }}
              className="text-center text-4xl pt-4 pb-2 font-extrabold"
            >
              Forgot Password?
            </h1>
            <form onSubmit={handlePasswordReset}>
              <div className="flex flex-col m-3 px-4">
                <label className="font-bold text-xl mb-2" htmlFor="reset-email">
                  Enter your Email:
                </label>
                <input
                  className="h-10 text-gray-800 rounded-lg text-[18px] px-2 border-gray-300 border-2 focus:border-pink-600 focus:ring-0"
                  type="email"
                  id="reset-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abc@example.com"
                  required
                />
              </div>
              {message && (
                <p className="text-center text-green-500">{message}</p>
              )}
              {error && <p className="text-center text-red-500">{error}</p>}
              <div className="mt-4 px-7">
                <button
                  type="submit"
                  className={`bg-pink-700 text-white px-4 py-2 rounded-lg font-bold w-[31vw] h-11 text-[18px] hover:bg-pink-600 transition-colors duration-300 ease-in-out ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Sending Email..." : "Send Reset Email"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
export default Login;
