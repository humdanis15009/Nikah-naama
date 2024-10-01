function Card() {
  return (
    <div className="flex justify-evenly ml-24 my-20">
      <div className="w-full gap-10 items-center leading-10  ">
        <div className="w-[25vw] flex h-[35vh] shadow-xl rounded-2xl border-t-2 justify-center items-center flex-col">
          <img
            className="h-[80px] w-[80px] mb-3 "
            src="../../public/images/group (1).png"
            alt=""
          />
          <span className="text-4xl font-extrabold my-3 ">43,121</span>
          <p className="text-3xl text-gray-600">No. of members</p>
        </div>
      </div>


      <div className="w-full gap-10 items-center  ">
        <div className="w-[25vw] flex h-[35vh] shadow-xl border-t-2 rounded-2xl justify-center items-center flex-col">
          <img
            className="h-[80px] w-[80px] mb-3 "
            src="../../public/images/heart.png"
            alt=""
          />
          <span className="text-4xl font-extrabold my-3">12,354</span>
          <p className="text-3xl text-gray-600">Successful Stories</p>
        </div>
      </div>


      <div className="w-full gap-10 items-center leading-10  ">
        <div className="w-[25vw] flex h-[35vh] shadow-xl border-t-2 rounded-2xl justify-center items-center flex-col">
          <img
            className="h-[80px] w-[80px] mb-3 "
            src="../../public/images/building.png"
            alt=""
          />
          <span className="text-4xl font-extrabold my-3">250+</span>
          <p className="text-3xl text-gray-600">Cities Presence</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
