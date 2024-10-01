import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Header.propTypes = {
  onData: PropTypes.func.isRequired,
};

function Header({ onData }) {
  const [pop, setPop] = useState(false);
  const [login, setLogin] = useState(true);

  return (
    <>
      <div className="flex w-full h-12 justify-between text-white items-center p-16 absolute z-10">
        <div className="text-[80px]" style={{ fontFamily: "Dancing Script" }}>
          Nikah Naama
        </div>
        <div>
          <ul className="text-2xl relative flex gap-x-20">
            <li
              className="cursor-pointer hover:text-pink-700"
              onClick={() => {
                setLogin((prev) => !prev);
                onData(login);
              }}
            >
              {login ? "Login" : "Register"}
            </li>

            <li
              className="cursor-pointer"
              onClick={() => setPop((prev) => !prev)}
            >
              <p
                className={`${pop ? "text-pink-700" : "text-white"}
                 hover:text-pink-700`}
              >
                Contact Us &#x25BE;
              </p>
            </li>

            {pop && (
              <div className="h-[147px] w-[230px] bg-black top-12 right-[-50px] bg-opacity-50 rounded-lg absolute z-20">
                <div className="flex items-center pt-1 px-2">
                  <img
                    className="bg-white rounded-full h-5 w-5"
                    src="../../public/images/phone.png"
                    alt="phone"
                  />
                  <a
                    href="tel:+919807419006"
                    target="_blank"
                    className="text-[16px] pl-2 text-white hover:underline"
                  >
                    +91 9807419006
                  </a>
                </div>
                <div className="flex items-center pt-1 px-2">
                  <img
                    className="bg-white rounded-full h-5 w-5"
                    src="../../public/images/whatsapp.png"
                    alt="whatsapp"
                  />
                  <a
                    href="https://wa.me/9197652088756"
                    target="_blank"
                    className="text-[16px] pl-2 text-white hover:underline"
                  >
                    +91 7652088756
                  </a>
                </div>
                <div className="flex items-center pt-1 px-2">
                  <img
                    className="bg-white rounded-full h-5 w-5"
                    src="../../public/images/email.png"
                    alt="email"
                  />
                  <a
                    href="mailto:anis300663@gmail.com"
                    className="text-[16px] pl-2 text-white hover:underline"
                  >
                    anis300663@gmail.com
                  </a>
                </div>
                <div className="flex items-center pt-1 px-2 cursor-pointer">
                  <img
                    className="bg-white rounded-full h-5 w-5"
                    src="../../public/images/info.png"
                    alt="info"
                  />
                  <p className="text-[16px] pl-2">
                    <Link className="hover:underline" to="/Contact">
                      View more details
                    </Link>
                    ...
                  </p>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
