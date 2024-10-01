import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-slate-800 text-white py-6 px-16 ">
      <div className="text-[80px]" style={{ fontFamily: "Dancing Script" }}>
        <a href="">Nikah Naama</a>
      </div>

      <div className="flex justify-between relative">
        <p className="w-[50%] pb-10">
          This website is owned and managed by Khidmat-e-Khalq since 1984. We,
          at Nikah Naama, are committed towards helping you find the one for
          whom you are destined to spend the rest of your lives. Our goal is to
          shape muslim matrimony into a journey of compassion and trust for you.
        </p>

        <div>
          <img
            className="h-[200px] w-[200px] rounded-2xl border-2 border-white absolute right-2 bottom-10"
            src="../../public/images/Founder.png"
            alt="Founder"
          />
          <p className="text-white relative top-[100px] font-bold right-[6px]">
            Founder: Haji Abdul Khaliq
          </p>
        </div>
      </div>

      <div>
        <ul className="flex justify-center gap-10 text-xl border-t-4 border-yellow-500 pt-6">
          <li>
              <p onClick={scrollToTop} className="hover:text-pink-700 cursor-pointer">
                Home
              </p>
            </li>
          <li>
            <Link className="hover:text-pink-700" to="/AboutUs">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-pink-700" to="/Contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="hover:text-pink-700" to="/Faq">
              FAQ
            </Link>
          </li>
          <li>
            <Link className="hover:text-pink-700" to="/Privacy">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className="hover:text-pink-700" to="/Tnc">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
