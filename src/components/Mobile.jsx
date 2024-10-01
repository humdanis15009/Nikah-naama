// import { useState } from "react";
// import axios from "axios";

// const Mobile = () => {
//   const [step, setStep] = useState("enterNumber"); // Tracks the current step (enterNumber or verifyOtp)
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Request OTP from backend
//   const requestOtp = async () => {
//     setIsSubmitting(true);
//     setError("");
//     try {
//       await axios.post("/api/request-otp", { phoneNumber });
//       setStep("verifyOtp");
//       setSuccess("OTP sent to your phone!");
//     } catch (err) {
//       setError("Failed to send OTP. Please try again.");
//     }
//     setIsSubmitting(false);
//   };

//   // Verify OTP
//   const verifyOtp = async () => {
//     setIsSubmitting(true);
//     setError("");
//     try {
//       await axios.post("/api/verify-otp", { phoneNumber, otp });
//       setSuccess("Phone number verified successfully!");
//       setStep("completed");
//     } catch (err) {
//       setError("Invalid OTP. Please try again.");
//     }
//     setIsSubmitting(false);
//   };

//   return (
//     <div className="flex flex-col items-center p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg my-16">
//       <h2 className="text-3xl pb-6 font-semibold mb-4">Mobile Number Verification</h2>

//       {step === "enterNumber" && (
//         <div className="w-full flex flex-col items-center">
//           <input
//             type="text"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             placeholder="Enter your phone number"
//             className="mb-4 p-2 border border-gray-300 rounded w-[345px]"
//           />
//           <button
//             onClick={requestOtp}
//             disabled={isSubmitting}
//             className="bg-pink-600 h-9 w-40 font-semibold text-white rounded hover:bg-pink-500 flex items-center justify-center"
//           >
//             {isSubmitting ? "Sending OTP..." : "Send OTP"}
//           </button>
//         </div>
//       )}

//       {step === "verifyOtp" && (
//         <div className="w-full flex flex-col items-center">
//           <input
//             type="text"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="Enter OTP"
//             className="mb-4 p-2 border border-gray-300 rounded w-full max-w-xs"
//           />
//           <button
//             onClick={verifyOtp}
//             disabled={isSubmitting}
//             className="bg-pink-600 h-9 w-40 font-semibold text-white rounded hover:bg-pink-500 flex items-center justify-center"
//           >
//             {isSubmitting ? "Verifying OTP..." : "Verify OTP"}
//           </button>
//         </div>
//       )}

//       {error && <p className="text-red-500 mt-4">{error}</p>}
//       {success && <p className="text-green-500 mt-4">{success}</p>}
//     </div>
//   );
// };

// export default Mobile;

// // PhoneVerification.jsx
// import React, { useState } from 'react';
// import { auth, db } from '../Firebase'; // Adjust the import path as necessary
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';
// import { useLocation } from 'react-router-dom';

// const PhoneVerification = () => {
//   const [step, setStep] = useState('enterNumber');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   // Configure reCAPTCHA verifier
//   const setupRecaptcha = () => {
//     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//       size: 'invisible',
//       callback: () => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//       },
//     }, auth);
//   };

//   // Request OTP from Firebase
//   const requestOtp = async () => {
//     setIsSubmitting(true);
//     setError('');
//     try {
//       setupRecaptcha();
//       const appVerifier = window.recaptchaVerifier;
//       const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
//       window.confirmationResult = confirmationResult; // Store confirmationResult
//       setStep('verifyOtp');
//       setSuccess('OTP sent to your phone!');
//     } catch (err) {
//       setError('Failed to send OTP. Please try again.');
//     }
//     setIsSubmitting(false);
//   };

//   const location = useLocation();
//   // const navigate = useNavigate();

//   // Extract user ID from URL
//   const queryParams = new URLSearchParams(location.search);
//   const uid = queryParams.get("uid");

//   // Verify OTP and update Firestore
//   const verifyOtp = async () => {
//     setIsSubmitting(true);
//     setError('');
//     try {
//       const confirmationResult = window.confirmationResult;
//       await confirmationResult.confirm(otp);
//       setSuccess('Phone number verified successfully!');

//       // Update Firestore with the new phone number
//       const userRef = doc(db, 'Biodata', uid); // Use the authenticated user's UID
//       await setDoc(userRef, { phoneNumber }, { merge: true });
//       setSuccess('Phone number verified and updated in Firestore!');

//       setStep('completed');
//     } catch (err) {
//       setError('Invalid OTP. Please try again.');
//     }
//     setIsSubmitting(false);
//   };

//   return (
//     <div className="flex flex-col items-center p-6 max-w-md mx-auto bg-white shadow-md rounded-lg my-16">
//       <h2 className="text-2xl pb-6 font-semibold mb-4">Phone Number Verification</h2>

//       {step === 'enterNumber' && (
//         <div className="w-full flex flex-col items-center">
//           <input
//             type="text"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             placeholder="Enter your phone number"
//             className="mb-4 p-2 border border-gray-300 rounded w-full"
//           />
//           <button
//             onClick={requestOtp}
//             disabled={isSubmitting}
//             className="bg-pink-600 h-10 w-full font-semibold text-white rounded hover:bg-pink-500"
//           >
//             {isSubmitting ? 'Sending OTP...' : 'Send OTP'}
//           </button>
//           <div id="recaptcha-container" className="hidden"></div>
//         </div>
//       )}

//       {step === 'verifyOtp' && (
//         <div className="w-full flex flex-col items-center">
//           <input
//             type="text"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="Enter OTP"
//             className="mb-4 p-2 border border-gray-300 rounded w-full"
//           />
//           <button
//             onClick={verifyOtp}
//             disabled={isSubmitting}
//             className="bg-pink-600 h-10 w-full font-semibold text-white rounded hover:bg-pink-500"
//           >
//             {isSubmitting ? 'Verifying OTP...' : 'Verify OTP'}
//           </button>
//         </div>
//       )}

//       {error && <p className="text-red-500 mt-4">{error}</p>}
//       {success && <p className="text-green-500 mt-4">{success}</p>}
//     </div>
//   );
// };

// export default PhoneVerification;

// EmailVerification.jsx
// import React, { useState } from "react";
// import { auth } from "../Firebase"; // Adjust the import path as necessary
// import { sendEmailVerification, updateEmail } from "firebase/auth";

// const EmailVerification = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [email, setEmail] = useState("");

//   const handleEmailUpdateAndSendVerification = async () => {
//     setIsSubmitting(true);
//     setError("");

//     try {
//       // Update user's email
//       const user = auth.currentUser;
//       await updateEmail(user, email);

//       // Send email verification
//       await sendEmailVerification(user);
//       setSuccess("Verification email sent! Please check your inbox.");
//     } catch (err) {
//       console.error("Error during email verification:", err);
//       setError("Failed to send verification email. Please try again.");
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <div className="flex flex-col items-center p-6 max-w-md mx-auto bg-white shadow-md rounded-lg my-16">
//       <h2 className="text-3xl pb-6 font-semibold mb-4">Email Verification</h2>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your email"
//         className="mb-4 p-2 border border-gray-300 rounded w-full"
//       />
//       <button
//         onClick={handleEmailUpdateAndSendVerification}
//         disabled={isSubmitting}
//         className="bg-pink-600 h-9 w-40 font-semibold text-white rounded hover:bg-pink-500 flex items-center justify-center"
//       >
//         {isSubmitting ? "Sending..." : "Verify Email"}
//       </button>
//       {error && <p className="text-red-500 mt-4">{error}</p>}
//       {success && <p className="text-green-500 mt-4">{success}</p>}
//     </div>
//   );
// };

// export default EmailVerification;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase"; // Make sure to import Firestore
import { updateEmail, sendEmailVerification } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore"; // Import Firestore functions

const EmailVerification = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailUpdateAndSendVerification = async () => {
    setIsSubmitting(true);
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages

    try {
      const user = auth.currentUser;
      const oldEmail = user.email; // Store the old email

      await updateEmail(user, email);
      await sendEmailVerification(user);

      // Update Firestore with both old and new emails
      const userDocRef = doc(db, "Biodata", user.uid); // Adjust collection name as necessary
      await updateDoc(userDocRef, {
        oldEmail: oldEmail,
        verifiedEmail: email,
      });

      setSuccess("Verification email sent! Please check your inbox.");
    } catch (err) {
      console.error("Error during email verification:", err);

      // Check for specific error codes
      if (err.code === "auth/invalid-email") {
        setError("The email address is not valid.");
      } else if (err.code === "auth/email-already-in-use") {
        setError("This email address is already in use.");
      } else if (err.code === "auth/requires-recent-login") {
        setError("Please log in again to update your email.");
      } else {
        setError("Failed to send verification email. Please try again.");
      }
    } finally {
      setIsSubmitting(false); // Stop loading regardless of success or failure
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const checkEmailVerification = async () => {
          await user.reload();
          if (user.emailVerified) {
            navigate(`/UserCardList?uid=${user.uid}`);
          }
        };
        const intervalId = setInterval(checkEmailVerification, 1000);

        return () => clearInterval(intervalId);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center p-6 max-w-3xl my-16 mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-3xl pb-6 font-semibold mb-4">Email Verification</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="mb-4 p-2 border border-gray-300 rounded w-[50%]"
      />
      <button
        onClick={handleEmailUpdateAndSendVerification}
        disabled={isSubmitting}
        className="bg-pink-700 h-9 w-40 font-semibold text-white rounded hover:bg-pink-600 flex items-center justify-center"
      >
        {isSubmitting ? "Sending..." : "Verify Email"}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
    </div>
  );
};

export default EmailVerification;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../Firebase";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// const MobileNumberVerification = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [verificationId, setVerificationId] = useState("");
//   const navigate = useNavigate();

//   const handleSendOtp = async () => {
//     setIsSubmitting(true);
//     setError("");
//     setSuccess("");

//     try {
//       // Initialize reCAPTCHA
//       const appVerifier = new RecaptchaVerifier(
//         "recaptcha-container",
//         {},
//         auth
//       );
//       const response = await signInWithPhoneNumber(
//         auth,
//         phoneNumber,
//         appVerifier
//       );
//       setVerificationId(response.verificationId);
//       setSuccess("OTP sent! Please check your messages.");
//     } catch (err) {
//       console.error("Error sending OTP:", err);
//       setError("Failed to send OTP. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     setIsSubmitting(true);
//     setError("");
//     setSuccess("");

//     try {
//       const credential = auth.PhoneAuthProvider.credential(verificationId, otp);
//       await auth.signInWithCredential(credential);
//       setSuccess("Phone number verified successfully!");
//       navigate(`/UserCardList?uid=${auth.currentUser.uid}`);
//     } catch (err) {
//       console.error("Error verifying OTP:", err);
//       setError("Invalid OTP. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white rounded-lg shadow-lg p-8 w-96">
//         <h1 className="text-2xl font-bold text-center mb-5">
//           Mobile Number Verification
//         </h1>
//         <div id="recaptcha-container"></div>
//         {error && <p className="text-red-500">{error}</p>}
//         {success && <p className="text-green-500">{success}</p>}

//         <input
//           type="text"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           placeholder="Enter your mobile number"
//           className="border border-gray-300 p-2 mb-4 rounded w-full"
//         />
//         <button
//           onClick={handleSendOtp}
//           disabled={isSubmitting}
//           className="bg-blue-500 text-white p-2 rounded w-full mb-4"
//         >
//           {isSubmitting ? "Sending..." : "Send OTP"}
//         </button>

//         <input
//           type="text"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//           placeholder="Enter OTP"
//           className="border border-gray-300 p-2 mb-4 rounded w-full"
//         />
//         <button
//           onClick={handleVerifyOtp}
//           disabled={isSubmitting}
//           className="bg-green-500 text-white p-2 rounded w-full"
//         >
//           {isSubmitting ? "Verifying..." : "Verify OTP"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MobileNumberVerification;
