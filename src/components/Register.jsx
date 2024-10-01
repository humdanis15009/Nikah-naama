import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth, db } from "../Firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true); // Start loading
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "Biodata", user.uid), { ...data });

      navigate(`/Form1?uid=${user.uid}`);
    } catch (error) {
      console.error("Error creating user:", error);
      if (error.code === "auth/email-already-in-use") {
        setError("email", { type: "manual", message: "Email already in use" });
      } else if (error.code === "auth/weak-password") {
        setError("password", {
          type: "manual",
          message: "Password should be at least 6 characters",
        });
      } else {
        setError("general", { type: "manual", message: error.message });
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex w-full h-screen absolute text-white justify-center items-center mt-28 object-cover">
      <div className="h-[61vh] w-[35vw] bg-black bg-opacity-40 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col m-3 px-4">
            <label className="font-bold text-xl mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="h-10 text-gray-800 rounded-lg text-[18px] px-2"
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              placeholder="abc@example.com"
            />
          </div>

          <div className="flex flex-col m-3 px-4">
            <label className="font-bold text-xl mb-2" htmlFor="mobileNumber">
              Mobile Number:
            </label>
            <input
              className="h-10 text-gray-800 rounded-lg text-[18px] px-2"
              type="text"
              id="mobileNumber"
              {...register("mobileNumber", {
                required: "Mobile number is required",
                maxLength: {
                  value: 13,
                  message: "Mobile number cannot exceed 10 digits",
                },
                minLength: {
                  value: 10,
                  message: "Mobile number cannot be less than 10 digits",
                },
              })}
              placeholder="Enter 10-digit mobile number"
            />
          </div>

          <div className="flex flex-col m-3 px-4">
            <label className="font-bold text-xl mb-2" htmlFor="profileFor">
              Create Profile for:
            </label>
            <select
              className="h-10 text-gray-800 rounded-lg text-[18px] px-2"
              id="profileFor"
              {...register("profileFor", {
                required: "Please select an option",
              })}
            >
              <option value="">Choose an option</option>
              <option value="self">Self</option>
              <option value="daughter">Daughter</option>
              <option value="son">Son</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="relativeFriend">Relative/Friend</option>
            </select>
          </div>

          <div className="flex flex-col m-3 px-4">
            <label className="font-bold text-xl mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="h-10 text-gray-800 rounded-lg text-[18px] px-2"
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password cannot be less than 8 characters",
                },
              })}
              placeholder="Enter your password"
            />
          </div>

          <div className="m-3 px-4 py-6">
            <button
              type="submit"
              className={`w-[31vw] h-11 border-2 rounded-2xl text-bold text-2xl bg-pink-700 font-semibold text-white hover:bg-pink-600 ${
                loading ? "opacity-90 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-4 border-gray-300 border-t-4 border-t-white rounded-full animate-spin inline-block mr-2"></div>
                  Registering...
                </>
              ) : (
                "REGISTER FREE"
              )}
            </button>

            <p className="text-xs mt-6 text-wrap text-center">
              By clicking on register free you confirm that you accept the{" "}
              <Link className="hover:underline" to="/Tnc">
                Terms & Conditions
              </Link>{" "}
              &nbsp;and{" "}
              <Link className="hover:underline" to="/Privacy">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { auth, db } from "../Firebase";
// import { setDoc, doc } from "firebase/firestore";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";

// function Register() {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     setError,
//     formState: { errors },
//   } = useForm();
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     setLoading(true); // Start loading
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         data.email,
//         data.password
//       );
//       const user = userCredential.user;

//       await setDoc(doc(db, "Biodata", user.uid), { ...data });

//       navigate(`/Form1?uid=${user.uid}`);
//     } catch (error) {
//       console.error("Error creating user:", error);
//       if (error.code === "auth/email-already-in-use") {
//         setError("email", { type: "manual", message: "Email already in use" });
//       } else if (error.code === "auth/weak-password") {
//         setError("password", {
//           type: "manual",
//           message: "Password should be at least 6 characters",
//         });
//       } else {
//         setError("general", { type: "manual", message: error.message });
//       }
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <div
//       className="flex w-full h-full sm:h-screen absolute text-white justify-center items-center mt-12 sm:mt-28 object-cover bg-cover bg-center"
//       style={{ backgroundImage: `url('/path-to-your-background.jpg')` }}
//     >
//       <div className="h-auto sm:h-[61vh] w-[90vw] sm:w-[35vw] bg-black bg-opacity-40 rounded-lg p-4 sm:p-6 md:p-8">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Email Field */}
//           <div className="flex flex-col m-2 sm:m-3 px-2 sm:px-4">
//             <label
//               className="font-bold text-base sm:text-xl mb-2"
//               htmlFor="email"
//             >
//               Email:
//             </label>
//             <input
//               className="h-10 text-gray-800 rounded-lg text-sm sm:text-[18px] px-2"
//               type="email"
//               id="email"
//               {...register("email", { required: "Email is required" })}
//               placeholder="abc@example.com"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs sm:text-sm">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>

//           {/* Mobile Number Field */}
//           <div className="flex flex-col m-2 sm:m-3 px-2 sm:px-4">
//             <label
//               className="font-bold text-base sm:text-xl mb-2"
//               htmlFor="mobileNumber"
//             >
//               Mobile Number:
//             </label>
//             <input
//               className="h-10 text-gray-800 rounded-lg text-sm sm:text-[18px] px-2"
//               type="text"
//               id="mobileNumber"
//               {...register("mobileNumber", {
//                 required: "Mobile number is required",
//                 maxLength: {
//                   value: 13,
//                   message: "Mobile number cannot exceed 10 digits",
//                 },
//                 minLength: {
//                   value: 10,
//                   message: "Mobile number cannot be less than 10 digits",
//                 },
//               })}
//               placeholder="Enter 10-digit mobile number"
//             />
//             {errors.mobileNumber && (
//               <p className="text-red-500 text-xs sm:text-sm">
//                 {errors.mobileNumber.message}
//               </p>
//             )}
//           </div>

//           {/* Profile For Field */}
//           <div className="flex flex-col m-2 sm:m-3 px-2 sm:px-4">
//             <label
//               className="font-bold text-base sm:text-xl mb-2"
//               htmlFor="profileFor"
//             >
//               Create Profile for:
//             </label>
//             <select
//               className="h-10 text-gray-800 rounded-lg text-sm sm:text-[18px] px-2"
//               id="profileFor"
//               {...register("profileFor", {
//                 required: "Please select an option",
//               })}
//             >
//               <option value="">Choose an option</option>
//               <option value="self">Self</option>
//               <option value="daughter">Daughter</option>
//               <option value="son">Son</option>
//               <option value="brother">Brother</option>
//               <option value="sister">Sister</option>
//               <option value="relativeFriend">Relative/Friend</option>
//             </select>
//           </div>

//           {/* Password Field */}
//           <div className="flex flex-col m-2 sm:m-3 px-2 sm:px-4">
//             <label
//               className="font-bold text-base sm:text-xl mb-2"
//               htmlFor="password"
//             >
//               Password:
//             </label>
//             <input
//               className="h-10 text-gray-800 rounded-lg text-sm sm:text-[18px] px-2"
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
//             {errors.password && (
//               <p className="text-red-500 text-xs sm:text-sm">
//                 {errors.password.message}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <div className="m-2 sm:m-3 px-2 sm:px-4 py-4 sm:py-6">
//             <button
//               type="submit"
//               className={`w-full sm:w-[31vw] h-10 sm:h-11 border-2 rounded-2xl text-sm sm:text-2xl bg-pink-700 font-semibold text-white hover:bg-pink-600 ${
//                 loading ? "opacity-90 cursor-not-allowed" : ""
//               }`}
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <div className="w-4 h-4 border-4 border-gray-300 border-t-4 border-t-white rounded-full animate-spin inline-block mr-2"></div>
//                   Registering...
//                 </>
//               ) : (
//                 "REGISTER FREE"
//               )}
//             </button>

//             <p className="text-xs sm:text-sm mt-4 sm:mt-6 text-center">
//               By clicking on register free you confirm that you accept the{" "}
//               <Link className="hover:underline" to="/Tnc">
//                 Terms & Conditions
//               </Link>{" "}
//               &nbsp;and{" "}
//               <Link className="hover:underline" to="/Privacy">
//                 Privacy Policy
//               </Link>
//               .
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;

// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { auth, db } from "../Firebase";
// import { setDoc, doc } from "firebase/firestore";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";

// function Register() {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     setError,
//     formState: { errors },
//   } = useForm();
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     setLoading(true); // Start loading
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         data.email,
//         data.password
//       );
//       const user = userCredential.user;

//       await setDoc(doc(db, "Biodata", user.uid), { ...data });

//       navigate(`/Form1?uid=${user.uid}`);
//     } catch (error) {
//       console.error("Error creating user:", error);
//       if (error.code === "auth/email-already-in-use") {
//         setError("email", { type: "manual", message: "Email already in use" });
//       } else if (error.code === "auth/weak-password") {
//         setError("password", {
//           type: "manual",
//           message: "Password should be at least 6 characters",
//         });
//       } else {
//         setError("general", { type: "manual", message: error.message });
//       }
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <div
//       className="flex w-full h-full sm:h-screen absolute text-white justify-center items-center mt-12 sm:mt-28 object-cover bg-cover bg-center"
//       style={{ backgroundImage: `url('/path-to-your-background.jpg')` }}
//     >
//       <div className="h-auto sm:h-[61vh] w-[90vw] sm:w-[35vw] bg-black bg-opacity-40 rounded-lg p-4 sm:p-6 md:p-8">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Email Field */}
//           <div className="flex flex-col mb-4">
//             <label
//               className="font-semibold text-base sm:text-xl mb-2"
//               htmlFor="email"
//             >
//               Email:
//             </label>
//             <input
//               className="h-12 text-gray-800 rounded-lg text-sm sm:text-base px-4 focus:outline-none focus:ring-2 focus:ring-pink-600"
//               type="email"
//               id="email"
//               {...register("email", { required: "Email is required" })}
//               placeholder="abc@example.com"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs sm:text-sm mt-1">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>

//           {/* Mobile Number Field */}
//           <div className="flex flex-col mb-4">
//             <label
//               className="font-semibold text-base sm:text-xl mb-2"
//               htmlFor="mobileNumber"
//             >
//               Mobile Number:
//             </label>
//             <input
//               className="h-12 text-gray-800 rounded-lg text-sm sm:text-base px-4 focus:outline-none focus:ring-2 focus:ring-pink-600"
//               type="text"
//               id="mobileNumber"
//               {...register("mobileNumber", {
//                 required: "Mobile number is required",
//                 maxLength: {
//                   value: 13,
//                   message: "Mobile number cannot exceed 13 digits",
//                 },
//                 minLength: {
//                   value: 10,
//                   message: "Mobile number cannot be less than 10 digits",
//                 },
//               })}
//               placeholder="Enter your mobile number"
//             />
//             {errors.mobileNumber && (
//               <p className="text-red-500 text-xs sm:text-sm mt-1">
//                 {errors.mobileNumber.message}
//               </p>
//             )}
//           </div>

//           {/* Profile For Field */}
//           <div className="flex flex-col mb-4">
//             <label
//               className="font-semibold text-base sm:text-xl mb-2"
//               htmlFor="profileFor"
//             >
//               Create Profile for:
//             </label>
//             <select
//               className="h-12 text-gray-800 rounded-lg text-sm sm:text-base px-4 focus:outline-none focus:ring-2 focus:ring-pink-600"
//               id="profileFor"
//               {...register("profileFor", {
//                 required: "Please select an option",
//               })}
//             >
//               <option value="">Choose an option</option>
//               <option value="self">Self</option>
//               <option value="daughter">Daughter</option>
//               <option value="son">Son</option>
//               <option value="brother">Brother</option>
//               <option value="sister">Sister</option>
//               <option value="relativeFriend">Relative/Friend</option>
//             </select>
//             {errors.profileFor && (
//               <p className="text-red-500 text-xs sm:text-sm mt-1">
//                 {errors.profileFor.message}
//               </p>
//             )}
//           </div>

//           {/* Password Field */}
//           <div className="flex flex-col mb-4">
//             <label
//               className="font-semibold text-base sm:text-xl mb-2"
//               htmlFor="password"
//             >
//               Password:
//             </label>
//             <input
//               className="h-12 text-gray-800 rounded-lg text-sm sm:text-base px-4 focus:outline-none focus:ring-2 focus:ring-pink-600"
//               type="password"
//               id="password"
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: {
//                   value: 8,
//                   message: "Password must be at least 8 characters",
//                 },
//               })}
//               placeholder="Enter your password"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-xs sm:text-sm mt-1">
//                 {errors.password.message}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center mt-6">
//             <button
//               type="submit"
//               className={`w-full sm:w-2/3 h-12 rounded-full text-sm sm:text-lg font-semibold bg-pink-600 text-white hover:bg-pink-500 transition focus:outline-none focus:ring-2 focus:ring-pink-600 ${
//                 loading ? "opacity-90 cursor-not-allowed" : ""
//               }`}
//               disabled={loading}
//             >
//               {loading ? (
//                 <div className="flex items-center justify-center space-x-2">
//                   <span className="w-4 h-4 border-4 border-gray-300 border-t-white rounded-full animate-spin"></span>
//                   <span>Registering...</span>
//                 </div>
//               ) : (
//                 "REGISTER FREE"
//               )}
//             </button>
//           </div>

//           {/* Terms and Conditions */}
//           <p className="text-xs sm:text-sm mt-4 text-center">
//             By clicking on register free, you confirm that you accept the{" "}
//             <Link className="underline hover:text-pink-300" to="/Tnc">
//               Terms & Conditions
//             </Link>{" "}
//             and{" "}
//             <Link className="underline hover:text-pink-300" to="/Privacy">
//               Privacy Policy
//             </Link>
//             .
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;
