import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <>
      <h1 className="text-5xl font-semibold text-pink-700 text-center">
        JOYFUL JOURNEYS
      </h1>
      <h2 className="text-4xl text-center text-gray-600 my-4">
        &ldquo;See What Our Delighted Clients Have to Say&ldquo;
      </h2>
      <div className="mt-[60px] mb-16 ml-20 overflow-hidden h-[560px]">
        <Slider {...settings} className="relative ">
          <div className="flex items-center p-4 ">
            <div className="h-[500px] w-[350px] shadow-2xl rounded-2xl border-2 border-pink-700 p-4 flex flex-col items-center">
              <img
                className="rounded-2xl w-full h-[250px] object-cover"
                src="../../public/images/Shezi-Akram.png"
                alt="wedding-photo"
              />
              <p className="text-center mt-3">★★★★☆</p>
              <p className="text-sm text-pink-700 font-bold my-3 text-center">
                -SHEZI & AKRAM
              </p>
              <p className="text-center text-sm text-gray-700">
                &ldquo;A heartfelt thank you to Nikah Naama for making our love
                story come true! From the very first connection to our beautiful
                wedding day, your service was a blessing. You helped us find
                each other and start our forever with joy and gratitude. May
                your journey continue to bring happiness to many more.!&ldquo;
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="h-[500px] w-[350px] shadow-2xl rounded-2xl border-2 border-pink-700 p-4 flex flex-col items-center">
              <img
                className="rounded-2xl w-full h-[250px] object-cover"
                src="https://euw2-p-all-cdn-7cxbcf7s.muzzapi.com/cms/posts/152a3a60-9ebe-400d-9bfe-05b44fc56bc7/nikkah%20prep%20-%202.webp"
                alt="wedding-photo"
              />
              <p className="text-center mt-3">★★★★☆</p>
              <p className="text-sm text-pink-700 font-bold my-3 text-center">
                -SABA & NADEEM
              </p>
              <p className="text-center text-sm text-gray-700">
                &ldquo;We are so grateful to Nikaah Naama for helping us find
                each other! The profiles were genuine, and the team was
                fantastic. Thanks to Nikah Naama, we found not just a partner,
                but our perfect match. We highly recommend this platform to
                anyone looking for meaningful connections.&ldquo;
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="h-[500px] w-[350px] shadow-2xl rounded-2xl border-2 border-pink-700 p-4 flex flex-col items-center">
              <img
                className="rounded-2xl w-full h-[250px] object-cover"
                src="https://static.vecteezy.com/system/resources/thumbnails/024/075/677/small_2x/realistic-portrait-of-loving-muslim-couple-during-the-marriage-ceremony-or-eid-celebration-generative-ai-photo.jpg"
                alt="wedding-photo"
              />
              <p className="text-center mt-3">★★★★☆</p>
              <p className="text-sm text-pink-700 font-bold my-3 text-center">
                -RUKHSAR & AMIR
              </p>
              <p className="text-center text-sm text-gray-700">
                &ldquo;Myself Amir Sheikh and I overjoyed to share our fantastic
                experience with Nikah Naama. The personalized support and
                genuine connections facilitated by the site made all the
                difference. For anyone on a quest for meaningful love, this site
                is a top choice!&ldquo;
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="h-[500px] w-[350px] shadow-2xl rounded-2xl border-2 border-pink-700 p-4 flex flex-col items-center">
              <img
                className="rounded-2xl w-full h-[250px] object-cover"
                src="https://cdn0.weddingwire.in/article/7973/original/1280/jpg/63797-muslim-marriage-images-irfan-younas-photography-9-the-grand-reception.jpeg"
                alt="wedding-photo"
              />
              <p className="text-center mt-3">★★★★☆</p>
              <p className="text-sm text-pink-700 font-bold my-3 text-center">
                -SHEZI & AKRAM
              </p>
              <p className="text-center text-sm text-gray-700">
                &ldquo;A heartfelt thank you to Nikah Naama for making our love
                story come true! From the very first connection to our beautiful
                wedding day, your service was a blessing. You helped us find
                each other and start our forever with joy and gratitude. May
                your journey continue to bring happiness to many more.!&ldquo;
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="h-[500px] w-[350px] shadow-2xl rounded-2xl border-2 border-pink-700 p-4 flex flex-col items-center">
              <img
                className="rounded-2xl w-full h-[250px] object-cover"
                src="https://euw2-p-all-cdn-7cxbcf7s.muzzapi.com/cms/posts/152a3a60-9ebe-400d-9bfe-05b44fc56bc7/nikkah%20prep%20-%202.webp"
                alt="wedding-photo"
              />
              <p className="text-center mt-3">★★★★☆</p>
              <p className="text-sm text-pink-700 font-bold my-3 text-center">
                -SABA & NADEEM
              </p>
              <p className="text-center text-sm text-gray-700">
                &ldquo;We are so grateful to Nikaah Naama for helping us find
                each other! The profiles were genuine, and the team was
                fantastic. Thanks to Nikah Naama, we found not just a partner,
                but our perfect match. We highly recommend this platform to
                anyone looking for meaningful connections.&ldquo;
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="h-[500px] w-[350px] shadow-2xl rounded-2xl border-2 border-pink-700 p-4 flex flex-col items-center">
              <img
                className="rounded-2xl w-full h-[250px] object-cover"
                src="data:image/jpeg;base64,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"
                alt="wedding-photo"
              />
              <p className="text-center mt-3">★★★★☆</p>
              <p className="text-sm text-pink-700 font-bold my-3 text-center">
                -RUKHSAR & AMIR
              </p>
              <p className="text-center text-sm text-gray-700">
                &ldquo;Myself Amir Sheikh and I overjoyed to share our fantastic
                experience with Nikah Naama. The personalized support and
                genuine connections facilitated by the site made all the
                difference. For anyone on a quest for meaningful love, this site
                is a top choice!&ldquo;
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="h-[500px] w-[350px] shadow-2xl rounded-2xl border-2 border-pink-700 p-4 flex flex-col items-center">
              <img
                className="rounded-2xl w-full h-[250px] object-cover"
                src="../../public/images/Shezi-Akram.png"
                alt="wedding-photo"
              />
              <p className="text-center mt-3">★★★★☆</p>
              <p className="text-sm text-pink-700 font-bold my-3 text-center">
                -SHEZI & AKRAM
              </p>
              <p className="text-center text-sm text-gray-700">
                &ldquo;A heartfelt thank you to Nikah Naama for making our love
                story come true! From the very first connection to our beautiful
                wedding day, your service was a blessing. You helped us find
                each other and start our forever with joy and gratitude. May
                your journey continue to bring happiness to many more.!&ldquo;
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="h-[500px] w-[350px] shadow-2xl rounded-2xl border-2 border-pink-700 p-4 flex flex-col items-center">
              <img
                className="rounded-2xl w-full h-[250px] object-cover"
                src="https://euw2-p-all-cdn-7cxbcf7s.muzzapi.com/cms/posts/152a3a60-9ebe-400d-9bfe-05b44fc56bc7/nikkah%20prep%20-%202.webp"
                alt="wedding-photo"
              />
              <p className="text-center mt-3">★★★★☆</p>
              <p className="text-sm text-pink-700 font-bold my-3 text-center">
                -SABA & NADEEM
              </p>
              <p className="text-center text-sm text-gray-700">
                &ldquo;We are so grateful to Nikaah Naama for helping us find
                each other! The profiles were genuine, and the team was
                fantastic. Thanks to Nikah Naama, we found not just a partner,
                but our perfect match. We highly recommend this platform to
                anyone looking for meaningful connections.&ldquo;
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="h-[500px] w-[350px] shadow-2xl rounded-2xl border-2 border-pink-700 p-4 flex flex-col items-center">
              <img
                className="rounded-2xl w-full h-[250px] object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujuZs7E6rp-YX0imYhmdASvQOKbmnh9gewUMHtRspqhIC3PLZhxgObbIKiKhLqSN8Y-Q&usqp=CAU"
                alt="wedding-photo"
              />
              <p className="text-center mt-3">★★★★☆</p>
              <p className="text-sm text-pink-700 font-bold my-3 text-center">
                -RUKHSAR & AMIR
              </p>
              <p className="text-center text-sm text-gray-700">
                &ldquo;Myself Amir Sheikh and I overjoyed to share our fantastic
                experience with Nikah Naama. The personalized support and
                genuine connections facilitated by the site made all the
                difference. For anyone on a quest for meaningful love, this site
                is a top choice!&ldquo;
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="h-[500px] w-[350px] shadow-2xl rounded-2xl border-2 border-pink-700 p-4 flex flex-col items-center">
              <img
                className="rounded-2xl w-full h-[250px] object-cover"
                src="../../public/images/Shezi-Akram.png"
                alt="wedding-photo"
              />
              <p className="text-center mt-3">★★★★☆</p>
              <p className="text-sm text-pink-700 font-bold my-3 text-center">
                -SHEZI & AKRAM
              </p>
              <p className="text-center text-sm text-gray-700">
                &ldquo;A heartfelt thank you to Nikah Naama for making our love
                story come true! From the very first connection to our beautiful
                wedding day, your service was a blessing. You helped us find
                each other and start our forever with joy and gratitude. May
                your journey continue to bring happiness to many more.!&ldquo;
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="h-[500px] w-[350px] shadow-2xl rounded-2xl border-2 border-pink-700 p-4 flex flex-col items-center">
              <img
                className="rounded-2xl w-full h-[250px] object-cover"
                src="https://euw2-p-all-cdn-7cxbcf7s.muzzapi.com/cms/posts/152a3a60-9ebe-400d-9bfe-05b44fc56bc7/nikkah%20prep%20-%202.webp"
                alt="wedding-photo"
              />
              <p className="text-center mt-3">★★★★☆</p>
              <p className="text-sm text-pink-700 font-bold my-3 text-center">
                -SABA & NADEEM
              </p>
              <p className="text-center text-sm text-gray-700">
                &ldquo;We are so grateful to Nikaah Naama for helping us find
                each other! The profiles were genuine, and the team was
                fantastic. Thanks to Nikah Naama, we found not just a partner,
                but our perfect match. We highly recommend this platform to
                anyone looking for meaningful connections.&ldquo;
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="h-[500px] w-[350px] shadow-2xl rounded-2xl border-2 border-pink-700 p-4 flex flex-col items-center">
              <img
                className="rounded-2xl w-full h-[250px] object-cover"
                src="https://static.vecteezy.com/system/resources/thumbnails/024/075/677/small_2x/realistic-portrait-of-loving-muslim-couple-during-the-marriage-ceremony-or-eid-celebration-generative-ai-photo.jpg"
                alt="wedding-photo"
              />
              <p className="text-center mt-3">★★★★☆</p>
              <p className="text-sm text-pink-700 font-bold my-3 text-center">
                -RUKHSAR & AMIR
              </p>
              <p className="text-center text-sm text-gray-700">
                &ldquo;Myself Amir Sheikh and I overjoyed to share our fantastic
                experience with Nikah Naama. The personalized support and
                genuine connections facilitated by the site made all the
                difference. For anyone on a quest for meaningful love, this site
                is a top choice!&ldquo;
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Reviews;
