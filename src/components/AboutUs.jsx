import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-pink-700 text-center my-6">
            About Us
          </h1>
          <p className="text-lg mb-6">
            Welcome to{" "}
            <span className="font-bold text-gray-600">Nikah Naama</span>, the
            premier online platform dedicated to bringing together Muslims
            seeking marriage. Our mission is to provide a{" "}
            <span className="font-bold text-gray-600">trusted</span> and{" "}
            <span className="font-bold text-gray-600">authentic</span> service
            that aligns with Islamic values and principles.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Founder
          </h2>
          <div className="flex items-center mb-6">
            <div className=" w-[650px] mr-6">
              <img
                className="rounded-lg"
                src="../../public/images/Founder.png"
                alt=""
              />
            </div>
            <p className="text-lg">
              {" "}
              <span className="font-bold text-gray-600">
                Haji Abdul Khaliq
              </span>{" "}
              is the visionary behind Nikah Naama.He is also the founder of
              &nbsp;
              <span className="font-bold text-gray-600">
                Khidmat-e-Khalq
              </span>{" "}
              foundation which has been running parallel to the Nikah Naama
              since 1984. He is retired from the post of{" "}
              <span className="font-bold text-gray-600">Chief Post Master</span>{" "}
              , Lucknow division. With years of experience in the field of
              matrimonial services, Haji Abdul Khaliq has always been driven by
              a passion to help individuals find their ideal life partners in
              accordance with{" "}
              <span className="font-bold text-gray-600">
                Islamic traditions
              </span>
              . His dedication and commitment to providing a respectful and
              reliable service form the cornerstone of our platform.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg mb-6">
            At Nikah Naama, our mission is to foster meaningful and lasting
            connections within the Muslim community. We strive to offer a
            platform that ensures:
          </p>
          <ul className="list-disc list-inside mb-6 pl-5">
            <li>
              <span className="font-bold text-gray-600">Confidentiality</span>{" "}
              and <span className="font-bold text-gray-600">security</span> for
              all users.
            </li>
            <li>
              <span className="font-bold text-gray-600">Ease of use</span> with
              a user-friendly interface.
            </li>
            <li>
              A range of{" "}
              <span className="font-bold text-gray-600">
                customizable search options
              </span>{" "}
              to meet individual preferences.
            </li>
            <li>
              <span className="font-bold text-gray-600">
                Cultural and religious sensitivity
              </span>{" "}
              in all interactions.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Values
          </h2>
          <p className="text-lg mb-6">
            We are guided by the principles of{" "}
            <span className="font-bold text-gray-600">honesty</span>,{" "}
            <span className="font-bold text-gray-600">integrity</span>, and{" "}
            <span className="font-bold text-gray-600">respect</span>. We believe
            that every individual deserves a matrimonial journey that is both{" "}
            <span className="font-bold text-gray-600">dignified</span> and{" "}
            <span className="font-bold text-gray-600">supportive</span>. Our
            team is dedicated to upholding these values in every aspect of our
            service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-lg mb-6">
            If you have any questions or need assistance, please do not hesitate
            to reach out to us. We are here to help you on your path to finding
            a meaningful and fulfilling partnership.
          </p>

          <p className="text-lg">
            Thank you for choosing Nikah Naama, where your journey to finding a
            life partner begins with trust and care.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
