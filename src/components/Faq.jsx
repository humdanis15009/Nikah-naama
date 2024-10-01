import { useEffect } from "react";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl text-pink-700 font-bold mb-6 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">
              What is Muslim Matrimony?
            </h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              &ldquo;Muslim Matrimony is a platform designed to help Muslim
              individuals find suitable life partners in accordance with Islamic
              traditions and values.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">
              How do I create a profile?
            </h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              &ldquo;To create a profile, click on the &lsquo;Sign Up&rsquo;
              button on the homepage and fill out the registration form with
              your personal details and preferences. Once submitted, you can
              start browsing profiles.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">
              Is there a fee to use the site?
            </h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              &ldquo;We offer both free and premium memberships. Free members
              have access to basic features, while premium members enjoy
              additional benefits and enhanced features. Check our pricing page
              for more details.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">
              How can I ensure my privacy?
            </h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              &ldquo;We prioritize your privacy and employ robust security
              measures to protect your personal information. You can manage your
              privacy settings in your account dashboard to control who can view
              your profile.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">
              What should I do if I encounter inappropriate behavior?
            </h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              &ldquo;If you experience or observe any inappropriate behavior,
              please report it to our support team using the
              &lsquo;Report&rsquo; feature on the user&apos;s profile page. We
              take such reports seriously and will take appropriate
              action.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">
              Can I delete my profile?
            </h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              &ldquo;Yes, you can delete your profile at any time by going to
              the &lsquo;Account Settings&rsquo; section in your dashboard and
              selecting &lsquo;Delete Profile&rsquo;. Please note that this
              action is irreversible.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">
              How can I contact customer support?
            </h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              &ldquo;You can contact customer support through the &lsquo;Contact
              Us&rsquo; page on our website, or by sending an email to
              support@example.com.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">
              Are there any success stories from users?
            </h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              &ldquo;Yes, we have numerous success stories from users who have
              found their life partners through our platform. Check our
              &lsquo;Success Stories&rsquo; section for more information.&rdquo;
            </blockquote>
          </div>

          {/* New FAQs */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">
              How safe is it to use this website?
            </h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              &ldquo;We take the safety of our users very seriously. Our
              platform uses advanced encryption technologies and strict privacy
              policies to protect your data. We also continuously monitor for
              any suspicious activities to ensure a safe experience for all
              users.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">
              Can I set my profile picture to private mode?
            </h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              &ldquo;Yes, you can set your profile picture to private mode. In
              your account settings, you have the option to choose who can view
              your profile picture. You can select options such as &lsquo;Only
              Me&rsquo;, &lsquo;Connections Only&rsquo;, or
              &lsquo;Everyone&rsquo; based on your preference.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
