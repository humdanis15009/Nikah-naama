import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-center text-pink-700 my-6">
            Contact Us
          </h1>
          <p className="text-lg mb-6">
            At <span className="font-bold text-gray-600">Nikah Naama</span>, we
            value your feedback and are here to assist you with any questions or
            concerns. Whether you need help with your account, have inquiries
            about our services, or wish to provide feedback, we are here to
            help.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Get in Touch :
          </h2>
          <p className="text-lg mb-6">
            You can reach us through the following methods:
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Email:</h3>
            <p className="text-lg">
              For general inquiries, please email us at:{" "}
              <a
                href="mailto:anis300663@gmail.com"
                className="font-bold text-blue-800 hover:underline"
              >
                anis300663@gmail.com
              </a>
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Phone:</h3>
            <p className="text-lg">
              For Calling assistance:{" "}
              <a
                href="tel:+91 9807419006"
                className="font-bold text-blue-800 hover:underline"
              >
                +91 9807419006
              </a>
            </p>
            <p className="text-lg">
              For WhatsApp assistance:{" "}
              <a
                href="https://wa.me/6394958577"
                className="font-bold text-blue-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 9807419006
              </a>
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Office Address:
            </h3>
            <p className="text-lg">
              Visit us at:{" "}
              <a
                href="https://www.google.com/maps/@26.8586568,80.880189,21z?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
                className="font-bold text-blue-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                542/ KB- 145, Kishore Vihar Colony, Gate no.- 2, Campwell road,
                Lucknow- 226003
              </a>
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            Contact Form :
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-600 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex gap-10">
              <div className="w-[49%]">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-600 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-[49%]">
                <label
                  htmlFor="number"
                  className="block text-lg font-medium text-gray-600 mb-1"
                >
                  Number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-600 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-700 text-white py-2 px-4 rounded-md hover:bg-pink-600"
            >
              Send Message
            </button>
          </form>

          <p className="text-lg mt-6">
            We look forward to hearing from you and will respond to your
            inquiries as soon as possible.
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
