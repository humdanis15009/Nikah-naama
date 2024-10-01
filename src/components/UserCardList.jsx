import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom";

const UserCardList = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  // Extract user ID from URL
  const queryParams = new URLSearchParams(location.search);
  const uid = queryParams.get("uid");

  useEffect(() => {
    const fetchUser = async () => {
      if (uid) {
        const userDoc = doc(db, "Biodata", uid);
        const userSnapshot = await getDoc(userDoc);

        if (userSnapshot.exists()) {
          setUser({ id: userSnapshot.id, ...userSnapshot.data() });
        } else {
          console.log("No such document!");
        }
        setLoading(false);
      }
    };

    fetchUser();
  }, [uid]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-5">User Profile</h1>
      <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-2xl mx-auto">
        <div className="flex flex-col items-center mb-5">
          {/* Safely check if imageUrls is defined and is an array */}
          {Array.isArray(user.imageUrls) && user.imageUrls.length > 0 ? (
            <img
              src={user.mainImage ? user.mainImage : user.imageUrls[0]} // Display the first image
              alt={`${user.firstName}'s profile`}
              className="w-32 h-32 rounded-full mx-auto mb-3"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-3">
              {/* <span>No Image</span> */}
              <img src="../../public/images/user.png" alt="No Image" />
            </div>
          )}
          <h2 className="text-2xl font-semibold">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-600">
            <strong>Location:</strong> {user.city}, {user.state}, {user.country}
          </p>
          <p className="text-gray-600">
            <strong>Contact:</strong> {user.mobileNumber}
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Personal Details</h3>
          <p>
            <strong>Age:</strong> {new Date().getFullYear() - user.year}
          </p>
          <p>
            <strong>Height:</strong> {user.height} cm
          </p>
          <p>
            <strong>Marital Status:</strong> {user.maritalStatus}
          </p>
          <p>
            <strong>Profile For:</strong> {user.profileFor}
          </p>

          <h3 className="text-lg font-semibold">Education & Occupation</h3>
          <p>
            <strong>Degree:</strong> {user.degree}
          </p>
          <p>
            <strong>Occupation:</strong> {user.occupation} - {user.occupationDetails}
          </p>
          <p>
            <strong>Employed In:</strong> {user.employedIn}
          </p>

          <h3 className="text-lg font-semibold">Family Details</h3>
          <p>
            <strong>Family Status:</strong> {user.familyStatus}
          </p>
          <p>
            <strong>Family Type:</strong> {user.familyType}
          </p>
          <p>
            <strong>Father's Name:</strong> {user.fatherName} ({user.fatherOccupation})
          </p>
          <p>
            <strong>Mother's Name:</strong> {user.motherName} ({user.motherOccupation})
          </p>
          <p>
            <strong>Siblings:</strong> {user.sis || "None"}
          </p>

          <h3 className="text-lg font-semibold">Other Information</h3>
          <p>
            <strong>Caste:</strong> {user.caste}
          </p>
          <p>
            <strong>Language:</strong> {user.language}
          </p>
          <p>
            <strong>Income:</strong> {user.income}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCardList;
