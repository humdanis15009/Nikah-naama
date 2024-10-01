function Process() {
  return (
    <>
        <p className="text-5xl font-bold text-gray-700 text-center pt-16">
          Three Simple steps to Find Your &nbsp;
          <span className="text-5xl font-bold text-pink-700">
            Perfect Match
          </span>
        </p>

      <div className="flex items-center justify-evenly my-12">
        <div className="h-[300px] w-[300px] border-2 border-black my-16 flex flex-col items-center rounded-3xl justify-center">
          <img
            className="w-[80px] h-[80px]"
            src="../../public/images/registered.png"
            alt="register"
          />
          <p className="text-3xl text-pink-700 font-bold my-4">REGISTER</p>
          <p className=" text-center text-xl">
            Free , Easy and Secure registration with Nikah Naama.
          </p>
        </div>
        <div>
          <img
            className="w-[100px]"
            src="../../public/images/arrow-pink.png"
            alt=""
          />
        </div>

        <div className="h-[300px] w-[300px] border-2 border-black my-16 flex flex-col items-center rounded-3xl justify-center">
          <img
            className="w-[80px] h-[80px]"
            src="../../public/images/loupe.png"
            alt="search"
          />
          <p className="text-3xl text-pink-700 font-bold my-4">SEARCH</p>
          <p className=" text-center text-xl">
            Search profiles from all over <br /> India with filtered options.
          </p>
        </div>
        <div>
          <img
            className="w-[100px]"
            src="../../public/images/arrow-pink.png"
            alt="arrow"
          />
        </div>

        <div className="h-[300px] w-[300px] border-2 border-black my-16 flex flex-col items-center rounded-3xl justify-center">
          <img
            className="w-[80px] h-[80px]"
            src="../../public/images/wedding-ring.png"
            alt="connect"
          />
          <p className="text-3xl text-pink-700 font-bold my-4">CONNECT</p>
          <p className=" text-center text-xl">
            Connect with your perfect ones anytime on Nikah Naama.
          </p>
        </div>
      </div>
    </>
  );
}

export default Process;
