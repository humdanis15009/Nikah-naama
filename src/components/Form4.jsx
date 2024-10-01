import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import { updateDoc, doc } from "firebase/firestore";

const Form4 = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [working, setWorking] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("uid");

  const selectedWorking = watch("prefWorking");

  useEffect(() => {
    if (
      selectedWorking === "" ||
      selectedWorking === "No" ||
      selectedWorking === "Doesn't Matter"
    ) {
      setWorking(false);
    } else {
      setWorking(true);
    }
  }, [selectedWorking]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Update Firestore document with new data
      await updateDoc(doc(db, "Biodata", userId), {
        ...data, // Merge new data with existing data
      });
      console.log("User data updated successfully");
      navigate(`/Verify?uid=${userId}`); // After successful update, navigate
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="min-h-[90vh] mt-16">
      <div className="max-w-5xl mx-auto p-6  bg-white shadow-2xl border-t-2 rounded-lg">
        <h1 className="text-4xl text-pink-700 font-bold text-center mb-6">
          Partner Preferences
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-lg font-semibold">Caste(s)</label>
              <input
                placeholder="Enter your caste / castes preferences here"
                type="text"
                {...register("prefCaste", {
                  required: "Caste is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.prefCaste && (
                <span className="text-red-500 text-sm">
                  {errors.prefCaste.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <label className="block text-lg font-semibold">Complexion</label>
              <select
                {...register("prefComplexion", {
                  required: "Complexion is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select complexion</option>
                <option value="Fair">Fair</option>
                <option value="Very Fair">Very Fair</option>
                <option value="Wheatish">Wheatish</option>
                <option value="Dark">Dark</option>
              </select>
              {errors.prefComplexion && (
                <span className="text-red-500 text-sm">
                  {errors.prefComplexion.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-lg font-semibold">Age Range</label>
              <select
                {...register("prefAge", { required: "Age Range is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select age range</option>
                <option value="18-25">18-25</option>
                <option value="26-30">26-30</option>
                <option value="31-35">31-35</option>
                <option value="36-40">36-40</option>
                <option value="40+">40+</option>
              </select>
              {errors.prefAge && (
                <span className="text-red-500 text-sm">
                  {errors.prefAge.message}
                </span>
              )}
            </div>

            {/* Height Range */}
            <div className="w-1/2">
              <label className="block text-lg font-semibold">
                Height Range
              </label>
              <select
                {...register("prefHeight", {
                  required: "Height Range is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select height range</option>
                <option value="4ft 5in - 5ft">4ft 5in - 5ft</option>
                <option value="5ft - 5ft 5in">5ft - 5ft 5in</option>
                <option value="5ft 6in - 6ft">5ft 6in - 6ft</option>
                <option value="6ft - 6ft 5in">6ft - 6ft 5in</option>
                <option value="6ft 6in+">6ft 6in+</option>
              </select>
              {errors.prefHeight && (
                <span className="text-red-500 text-sm">
                  {errors.heightPref.message}
                </span>
              )}
            </div>
          </div>

          {/* Education */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-lg font-semibold">Education</label>
              <select
                {...register("prefEducation", {
                  required: "Education is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select education</option>
                <option value="High School">High School</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
                <option value="Doesn't Matter">Doesn't Matter</option>
              </select>
              {errors.prefEducation && (
                <span className="text-red-500 text-sm">
                  {errors.prefEducation.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <label className="block text-lg font-semibold">Location</label>
              <input
                placeholder="Enter your location preference here"
                type="text"
                {...register("prefLocation", {
                  required: "Location is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.prefLocation && (
                <span className="text-red-500 text-sm">
                  {errors.prefLocation.message}
                </span>
              )}
            </div>
          </div>

          {/* Working */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-lg font-semibold">Working</label>
              <select
                {...register("prefWorking", {
                  required: "Working is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">
                  Select working preference of your partner here
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Doesn't Matter">Doesn't Matter</option>
                {/* <option value="May be">May be</option> */}
              </select>
              {errors.prefWorking && (
                <span className="text-red-500 text-sm">
                  {errors.prefWorking.message}
                </span>
              )}
            </div>

            {/* Profession/Occupation */}

            <div className="w-1/2">
              {working && (
                <div>
                  <label className="block text-lg font-semibold">
                    Profession/Occupation
                  </label>
                  <select
                    {...register("prefProfession", {
                      required: "Profession is required",
                    })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select profession</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.prefProfession && (
                    <span className="text-red-500 text-sm">
                      {errors.prefProfession.message}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="justify-center flex">
            <button
              type="submit"
              className="w-[50%] mt-4 text-xl bg-pink-700 font-bold text-white p-2 rounded-md hover:bg-pink-600"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-4 border-gray-300 border-t-4 border-t-white rounded-full animate-spin inline-block mr-2"></div>
                  Proceeding...
                </>
              ) : (
                "Proceed to next step"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form4;
