import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import { updateDoc, doc } from "firebase/firestore";

const Form3 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [bro, setBro] = useState(false);
  const [sis, setSis] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedBro = watch("bro");
  const selectedSis = watch("sis");
  // const selectedSis = watch("sis");
  console.log(selectedBro);
  useEffect(() => {
    if (selectedBro === "None" || selectedBro === "") setBro(false);
    else setBro(true);
  }, [selectedBro]);

  useEffect(() => {
    if (selectedSis === "None" || selectedSis === "") setSis(false);
    else setSis(true);
  }, [selectedSis]);

  const location = useLocation();
  const navigate = useNavigate();

  // Extract user ID from URL
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("uid");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Update Firestore document with new data
      await updateDoc(doc(db, "Biodata", userId), { ...data });
      console.log("User data updated successfully");
      navigate(`/Form4?uid=${userId}`);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="min-h-[90vh] mt-8">
      <div className="max-w-5xl mx-auto p-6  bg-white shadow-2xl border-t-2 rounded-lg">
        <h1 className="text-4xl text-pink-700 font-bold text-center mb-6">
          Family Details
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex gap-4">
            {/* Family Type */}
            <div className="w-1/3">
              <label className="block text-lg font-semibold">Family Type</label>
              <select
                {...register("familyType", {
                  required: "Family Type is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Please select a value</option>
                <option value="Nuclear">Nuclear</option>
                <option value="Joint">Joint</option>
              </select>
              {errors.familyType && (
                <span className="text-red-500 text-sm">
                  {errors.familyType.message}
                </span>
              )}
            </div>

            <div className="w-1/3">
              <label className="block text-lg font-semibold">
                Family Status
              </label>
              <select
                {...register("familyStatus", {
                  required: "Family Status is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Please select a value</option>
                <option value="Rich / Affluent">Rich / Affluent</option>
                <option value="Upper Middle Class">Upper Middle Class</option>
                <option value="Middle Class">Middle Class</option>
              </select>
              {errors.familyStatus && (
                <span className="text-red-500 text-sm">
                  {errors.familyStatus.message}
                </span>
              )}
            </div>

            <div className="w-1/3">
              <label className="block text-lg font-semibold">
                Family Values / Lifestyle
              </label>
              <select
                {...register("familyLifestyle", {
                  required: "Family Lifestyle is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Please select a value</option>
                <option value="orthodox">Orthodox</option>
                <option value="moderate">Moderate</option>
                <option value="modern">Modern</option>
                <option value="conservative">Conservative</option>
                <option value="traditional">Traditional</option>
              </select>
              {errors.familyType && (
                <span className="text-red-500 text-sm">
                  {errors.familyType.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-lg font-semibold">
                Father&apos;s Name
              </label>
              <input
                type="text"
                {...register("fatherName", {
                  required: "Father's Name is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.fatherName && (
                <span className="text-red-500 text-sm">
                  {errors.fatherName.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <label className="block text-lg font-semibold">
                Father&apos;s Occupation
              </label>
              <select
                {...register("fatherOccupation", {
                  required: "Father's Occupation is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Please select an occupation</option>
                <option value="Business Self Employed">
                  Business/Self Employed
                </option>
                <option value="Private Sector">Private Sector</option>
                <option value="Government PSU">Government PSU</option>
                <option value="Defence">Defence</option>
                <option value="Civil Services">Civil Services</option>
                <option value="Politician">Politician</option>
                <option value="Social Workers">Social Workers</option>
                <option value="Not Working">Not Working</option>
                <option value="Retired">Retired</option>
                <option value="Other">Other</option>
              </select>
              {errors.fatherOccupation && (
                <span className="text-red-500 text-sm">
                  {errors.fatherOccupation.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-lg font-semibold">
                Mother&apos;s Name
              </label>
              <input
                type="text"
                {...register("motherName", {
                  required: "Mother's Name is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.motherName && (
                <span className="text-red-500 text-sm">
                  {errors.motherName.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <label className="block text-lg font-semibold">
                Mother&apos;s Occupation
              </label>
              <select
                {...register("motherOccupation", {
                  required: "Mother's Occupation is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Please select an occupation</option>
                <option value="Homemaker / Housewife">
                  Homemaker / Housewife
                </option>
                <option value="Business Self Employed">
                  Business/Self Employed
                </option>
                <option value="Private Sector">Private Sector</option>
                <option value="Government PSU">Government PSU</option>
                <option value="Defence">Defence</option>
                <option value="Civil Services">Civil Services</option>
                <option value="Politician">Politician</option>
                <option value="Social Workers">Social Workers</option>
                <option value="Not Working">Not Working</option>
                <option value="Retired">Retired</option>
                <option value="Other">Other</option>
              </select>
              {errors.motherOccupation && (
                <span className="text-red-500 text-sm">
                  {errors.motherOccupation.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-lg font-semibold">
                No. of Brothers
              </label>
              <select
                {...register("bro", {
                  required: "This field is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Please select a value</option>
                <option value="None">None</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
              {errors.bro && (
                <span className="text-red-500 text-sm">
                  {errors.bro.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              {bro && (
                <div>
                  <label className="block text-lg font-semibold">
                    How many married?
                  </label>
                  <select
                    {...register("marriedBro", {
                      required: "This field is required",
                    })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Please select a value</option>
                    <option value="None">None</option>
                    {[
                      ...Array(
                        Number(selectedBro === "None" ? 0 : selectedBro)
                      ).keys(),
                    ].map((i) => {
                      return (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      );
                    })}
                  </select>
                  {errors.marriedBro && (
                    <span className="text-red-500 text-sm">
                      {errors.marriedBro.message}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-lg font-semibold">
                No. of Sisters
              </label>
              <select
                {...register("sis", {
                  required: "This field is required",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Please select a value</option>
                <option value="None">None</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
              {errors.sis && (
                <span className="text-red-500 text-sm">
                  {errors.sis.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              {sis && (
                <div>
                  <label className="block text-lg font-semibold">
                    How many married?
                  </label>
                  <select
                    {...register("marriedSis", {
                      required: "This field is required",
                    })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Please select a value</option>
                    <option value="None">None</option>
                    {[
                      ...Array(
                        Number(selectedSis === "None" ? 0 : selectedSis)
                      ).keys(),
                    ].map((i) => {
                      return (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      );
                    })}
                  </select>
                  {errors.marriedSis && (
                    <span className="text-red-500 text-sm">
                      {errors.marriedSis.message}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="w-full">
            <label className="block text-lg font-semibold">About Family </label>
            <textarea
              rows={1}
              type="text"
              {...register("family")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Write about your family details in brief..."
            />
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

export default Form3;
