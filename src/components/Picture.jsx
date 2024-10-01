import { useState, useEffect } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom";

const Picture = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const maxFiles = 3;
  const storage = getStorage();
  const firestore = getFirestore();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    // Check if adding these files would exceed the limit
    if (
      files.length + selectedFiles.length + uploadedImages.length >
      maxFiles
    ) {
      setShowModal(true); // Show modal when the limit is exceeded
      return;
    }

    const updatedFiles = [...selectedFiles, ...files];
    setSelectedFiles(updatedFiles);
  };

  useEffect(() => {
    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);

    return () => {
      newPreviews.forEach((preview) => URL.revokeObjectURL(preview));
    };
  }, [selectedFiles]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("uid");

  // Fetch the existing images from Firestore and set uploadedImages
  useEffect(() => {
    const fetchExistingImages = async () => {
      if (userId) {
        const userDocRef = doc(firestore, "Biodata", userId);
        const userSnapshot = await getDoc(userDocRef);

        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          setUploadedImages(userData.imageUrls || []);
          setMainImage(userData.mainImage || "");
        }
      }
    };

    fetchExistingImages();
  }, [userId, firestore]);

  const handleUpload = async () => {
    // Ensure no more than maxFiles images are uploaded (selectedFiles + uploadedImages)
    if (selectedFiles.length + uploadedImages.length > maxFiles) {
      setShowModal(true); // Show modal when the limit is exceeded before uploading
      return;
    }

    if (selectedFiles.length === 0) return;

    setLoading(true);
    const uploadPromises = selectedFiles.map(async (file) => {
      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      return { url: downloadURL, name: file.name };
    });

    try {
      const uploaded = await Promise.all(uploadPromises);

      // Merge new uploaded images with existing ones
      const allUploadedImages = [
        ...uploadedImages,
        ...uploaded.map((img) => img.url),
      ];

      const userDocRef = doc(firestore, "Biodata", userId);
      await setDoc(
        userDocRef,
        { imageUrls: allUploadedImages, mainImage },
        { merge: true }
      );

      setUploadedImages(allUploadedImages);
      setSelectedFiles([]);
      setPreviews([]);
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectMainImage = async (imageUrl) => {
    setMainImage(imageUrl);

    // Save the main image URL in Firestore when selected
    const userDocRef = doc(firestore, "Biodata", userId);
    try {
      await setDoc(userDocRef, { mainImage: imageUrl }, { merge: true });
      console.log("Main image updated successfully!");
    } catch (error) {
      console.error("Error updating main image:", error);
    }
  };

  const handleRemoveFile = (fileToRemove) => {
    const updatedFiles = selectedFiles.filter((file) => file !== fileToRemove);
    setSelectedFiles(updatedFiles);
  };

  const closeModal = () => setShowModal(false); // Function to close the modal

  return (
    <div className="flex flex-col items-center p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg my-16">
      <h2 className="text-3xl pb-6 font-semibold mb-4">Upload Your Photos</h2>

      {/* Display the max upload limit */}
      <p className="text-red-500 font-semibold mb-4">
        You can upload a maximum of {maxFiles} images.
      </p>

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-300 rounded-lg cursor-pointer"
      />

      {previews.length > 0 && (
        <div className="mb-4 flex gap-4 flex-wrap justify-center">
          {previews.map((preview, index) => (
            <div key={index} className="relative">
              <img
                src={preview}
                alt={`Preview ${index}`}
                className="h-48 w-48 rounded-lg border border-gray-200"
              />
              <button
                onClick={() => handleRemoveFile(selectedFiles[index])}
                className="absolute top-2 right-2 bg-red-500 text-white h-6 w-6 rounded-full text-xs"
              >
                <img src="../../public/images/bin.png" alt="delete" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Uploaded Images Section */}
      {uploadedImages.length > 0 && (
        <>
          <p className="text-gray-500 mb-6 text-lg">
            Click on an image to select it as your main display picture (DP).
          </p>
          <div className="mb-4 flex gap-4 flex-wrap justify-center">
            {uploadedImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Uploaded ${index}`}
                  className={`h-48 w-48 rounded-lg border mx-3 border-gray-200 transition-transform duration-200 ease-in-out ${
                    mainImage === image
                      ? "ring-4 ring-pink-600 transform scale-105"
                      : "hover:scale-105"
                  }`}
                  onClick={() => handleSelectMainImage(image)} // Select as main image
                />
                {mainImage === image && (
                  <span className="absolute top-0 right-2 font-[750] text-white bg-green-600 rounded-full p-1">
                    ⭐ DP&nbsp;
                  </span>
                )}

                <span className="absolute bottom-1 left-2 bg-green-500 text-white text-sm px-1 rounded">
                  Uploaded
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        className={`bg-pink-700 font-semibold text-white h-9 w-40 rounded hover:bg-pink-600 ${
          loading ? "opacity-90 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-4 border-gray-300 border-t-4 border-t-white rounded-full animate-spin inline-block mr-2"></div>
            Uploading...
          </>
        ) : selectedFiles.length === 1 ? (
          "Upload Photo"
        ) : (
          "Upload Photos"
        )}
      </button>

      {/* Modal for file limit warning */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">
              Upload Limit Exceeded
            </h3>
            <p className="text-gray-700 mb-6">
              You can only upload a maximum of {maxFiles} images. Please remove
              some images to proceed.
            </p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
              onClick={closeModal}
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Picture;
