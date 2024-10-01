import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { db } from "../Firebase";
import { updateDoc, doc } from "firebase/firestore";

const Form1 = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [lang, setLang] = useState(false);
  const [caste, setCaste] = useState(false);
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedLanguage = watch("language");
  const selectedCaste = watch("caste");
  const selectedStatus = watch("maritalStatus");

  useEffect(() => {
    if (selectedLanguage === "Other") {
      setLang(true);
      setValue("other-language", ""); // Clear any previous value
    } else {
      setLang(false);
      setValue("other-language", ""); // Clear the value if not 'Other'
    }
  }, [selectedLanguage, setValue]);

  useEffect(() => {
    if (selectedCaste === "Other") {
      setCaste(true);
      setValue("other-caste", ""); // Clear any previous value
    } else {
      setCaste(false);
      setValue("other-caste", ""); // Clear the value if not 'Other'
    }
  }, [selectedCaste, setValue]);

  useEffect(() => {
    if (selectedStatus === "" || selectedStatus === "Unmarried") {
      setStatus(false);
    } else if (selectedStatus !== "Unmarried") {
      setStatus(true);
    }
  }, [selectedStatus]);

  const location = useLocation();
  const navigate = useNavigate();

  // Extract user ID from URL
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("uid");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Update Firestore document with new data
      await updateDoc(doc(db, "Biodata", userId), {
        ...data, // Merge new data with existing data
      });
      console.log("User data updated successfully");
      navigate(`/Form2?uid=${userId}`);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="min-h-[90vh] mt-16">
      <div className="max-w-5xl mx-auto p-6  bg-white shadow-2xl border-t-2 rounded-lg">
        <h1 className="text-4xl text-pink-700 font-bold text-center mb-6">
          Register to Find Your Perfect Match
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-lg font-semibold">First Name</label>
              <input
                type="text"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            {/* Last Name */}
            <div className="w-1/2">
              <label className="block text-lg font-semibold">Last Name</label>
              <input
                type="text"
                {...register("lastName", { required: "Last Name is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md  focus:ring-pink-500"
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>

          {/* Date of Birth (in the same row) */}
          <div>
            <label className="block text-lg font-semibold">Date of Birth</label>
            <div className="flex gap-4">
              <select
                {...register("day", { required: "Day is required" })}
                className="w-1/3 p-2 border border-gray-300 rounded-md"
              >
                <option value="">Day</option>
                {[...Array(31).keys()].map((day) => (
                  <option key={day} value={day + 1}>
                    {day + 1}
                  </option>
                ))}
              </select>

              <select
                {...register("month", { required: "Month is required" })}
                className="w-1/3 p-2 border border-gray-300 rounded-md"
              >
                <option value="">Month</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month, index) => (
                  <option key={index} value={index + 1}>
                    {month}
                  </option>
                ))}
              </select>

              <select
                {...register("year", { required: "Year is required" })}
                className="w-1/3 p-2 border border-gray-300 rounded-md"
              >
                <option value="">Year</option>
                {[...Array(100).keys()].map((year) => (
                  <option key={year} value={new Date().getFullYear() - year}>
                    {new Date().getFullYear() - year}
                  </option>
                ))}
              </select>
            </div>

            {(errors.day || errors.month || errors.year) && (
              <span className="text-red-500 text-sm">
                Date of birth required
              </span>
            )}
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-lg font-semibold">Complexion</label>
              <select
                {...register("complexion", {
                  required: "Complexion is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Please select a value</option>
                <option value="Dark">Dark</option>
                <option value="Wheatish">Wheatish</option>
                <option value="Fair">Fair</option>
                <option value="Very Fair">Very Fair</option>
              </select>
              {errors.complexion && (
                <span className="text-red-500 text-sm">
                  {errors.complexion.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <label className="block text-lg font-semibold">Gender</label>
              <select
                {...register("gender", {
                  required: "Gender is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Please select a value</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <span className="text-red-500 text-sm">
                  {errors.gender.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-lg font-semibold">Height</label>
              <select
                {...register("height", { required: "Height is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Please select a value</option>
                {[...Array((7 - 4) * 12 + 1).keys()].map((i) => {
                  // Convert i to feet and inches
                  const totalInches = i + 4 * 12; // Adding base inches for feet

                  const feet = Math.floor(totalInches / 12);
                  const inches = totalInches % 12;

                  return (
                    <option key={i} value={totalInches}>
                      {`${feet}' ${inches === 0 ? "feet" : inches}"`}
                    </option>
                  );
                })}
              </select>
              {errors.height && (
                <span className="text-red-500 text-sm">
                  {errors.height.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <label htmlFor="language" className="block text-lg font-semibold">
                Mother Tongue
              </label>
              {lang ? (
                <input
                  {...register("other-language", {
                    required: "Please specify your language",
                  })}
                  type="text"
                  placeholder="Type your mother tongue here"
                  className=" mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-pink-500"
                />
              ) : (
                <select
                  {...register("language", {
                    required: "Language is required",
                  })}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-pink-500"
                >
                  <option value="">Please select your mother tongue</option>
                  <option value="Hindi / Urdu">Hindi / Urdu</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Kashmiri">Kashmiri</option>
                  <option value="Sindhi">Sindhi</option>
                  <option value="Nepali">Nepali</option>
                  <option value="Bengali">Bengali</option>
                  <option value="Telugu">Telugu</option>
                  <option value="Marathi">Marathi</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Gujarati">Gujarati</option>
                  <option value="Malayalam">Malayalam</option>
                  <option value="Kannada">Kannada</option>
                  <option value="Odia">Odia</option>
                  <option value="Punjabi">Punjabi</option>
                  <option value="Assamese">Assamese</option>
                  <option value="Maithili">Maithili</option>
                  <option value="Santali">Santali</option>
                  <option value="Konkani">Konkani</option>
                  <option value="Sanskrit">Sanskrit</option>
                  <option value="Bhili">Bhili</option>
                  <option value="Gondi">Gondi</option>
                  <option value="Bodo">Bodo</option>
                  <option value="Rajasthani">Rajasthani</option>
                  <option value="Other">Other</option>
                </select>
              )}
              {errors.language && (
                <span className="text-red-500 text-sm">
                  {errors.language.message}
                </span>
              )}
              {errors["other-language"] && (
                <span className="text-red-500 text-sm">
                  {errors["other-language"].message}
                </span>
              )}
            </div>
          </div>

          {/* Marital Status and Children (in the same row) */}
          <div className="flex gap-4">
            {/* Marital Status */}
            <div className="w-1/2">
              <label className="block text-lg font-semibold">
                Marital Status
              </label>
              <select
                {...register("maritalStatus", {
                  required: "Marital status is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Please select a value</option>
                <option value="Unmarried">Unmarried</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
                <option value="Separated">Separated</option>
              </select>
              {errors.maritalStatus && (
                <span className="text-red-500 text-sm">
                  {errors.maritalStatus.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              {status && (
                <div>
                  <label className="block text-lg font-semibold">
                    Children
                  </label>
                  <select
                    {...register("children", {
                      required: "Children field is required",
                    })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Please select a value</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="5+">5+</option>
                  </select>
                  {errors.children && (
                    <span className="text-red-500 text-sm">
                      {errors.children.message}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Caste and Mother Tongue (in the same row) */}
          <div className="flex gap-4">
            {/* Caste */}
            <div className="w-1/2">
              <label className="block text-lg font-semibold">Sect</label>
              <select
                {...register("sect", { required: "Sect is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Please select a value</option>
                <option value="Sunni">Sunni</option>
                <option value="Shia">Shia</option>
              </select>
              {errors.sect && (
                <span className="text-red-500 text-sm">
                  {errors.sect.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <label className="block text-lg font-semibold">Caste</label>
              {caste ? (
                <input
                  {...register("other-caste", {
                    required: "Please specify your caste",
                  })}
                  type="text"
                  placeholder="Type your caste here"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              ) : (
                <select
                  {...register("caste", { required: "Caste is required" })}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Please select a value</option>
                  <option value="Abbasi">Abbasi</option>
                  <option value="Afghan">Afghan</option>
                  <option value="Alvi">Alvi</option>
                  <option value="Ansari">Ansari</option>
                  <option value="Arab">Arab</option>
                  <option value="Asadi">Asadi</option>
                  <option value="Baghdadi">Baghdadi</option>
                  <option value="Baig">Baig</option>
                  <option value="Barelvi">Barelvi</option>
                  <option value="Bohra">Bohra</option>
                  <option value="Bukhari">Bukhari</option>
                  <option value="Chaudhary">Chaudhary</option>
                  <option value="Chishti">Chishti</option>
                  <option value="Dakhini">Dakhini</option>
                  <option value="Dawoodi Bohra">Dawoodi Bohra</option>
                  <option value="Deobandi">Deobandi</option>
                  <option value="Faqir">Faqir</option>
                  <option value="Farooqui">Farooqui</option>
                  <option value="Gujjar">Gujjar</option>
                  <option value="Halwai">Halwai</option>
                  <option value="Hanafi">Hanafi</option>
                  <option value="Hussaini">Hussaini</option>
                  <option value="Jafari">Jafari</option>
                  <option value="Jat">Jat</option>
                  <option value="Jilani">Jilani</option>
                  <option value="Kazmi">Kazmi</option>
                  <option value="Khan">Khan</option>
                  <option value="Khanani">Khanani</option>
                  <option value="Khoja">Khoja</option>
                  <option value="Lohar">Lohar</option>
                  <option value="Madni">Madni</option>
                  <option value="Mahdavi">Mahdavi</option>
                  <option value="Malik">Malik</option>
                  <option value="Mansoori">Mansoori</option>
                  <option value="Meo">Meo</option>
                  <option value="Mir">Mir</option>
                  <option value="Mirza">Mirza</option>
                  <option value="Memon">Memon</option>
                  <option value="Mughal">Mughal</option>
                  <option value="Naqvi">Naqvi</option>
                  <option value="Nadvi">Nadvi</option>
                  <option value="Naimi">Naimi</option>
                  <option value="Pathan">Pathan</option>
                  <option value="Pashmina">Pashmina</option>
                  <option value="Pirzada">Pirzada</option>
                  <option value="Qadri">Qadri</option>
                  <option value="Qureshi">Qureshi</option>
                  <option value="Rajput Muslim">Rajput Muslim</option>
                  <option value="Razvi">Razvi</option>
                  <option value="Rizvi">Rizvi</option>
                  <option value="Rohilla">Rohilla</option>
                  <option value="Saifi">Saifi</option>
                  <option value="Salafi">Salafi</option>
                  <option value="Shaikh">Shaikh</option>
                  <option value="Shah">Shah</option>
                  <option value="Shamsi">Shamsi</option>
                  <option value="Sheikh">Sheikh</option>
                  <option value="Siddiqi">Siddiqi</option>
                  <option value="Siddiqui">Siddiqui</option>
                  <option value="Sufi">Sufi</option>
                  <option value="Syed">Syed</option>
                  <option value="Teli">Teli</option>
                  <option value="Turk">Turk</option>
                  <option value="Usmani">Usmani</option>
                  <option value="Zuberi">Zuberi</option>
                  <option value="Other">Other</option>
                </select>
              )}
              {errors.caste && (
                <span className="text-red-500 text-sm">
                  {errors.caste.message}
                </span>
              )}
              {errors["other-caste"] && (
                <span className="text-red-500 text-sm">
                  {errors["other-caste"].message}
                </span>
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

export default Form1;
