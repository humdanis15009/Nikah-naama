import Card from "./Card";

function About() {
  return (
    <>
      <div>
        <h1 className="text-center font-semibold text-6xl mt-20 text-pink-700">About Us</h1>
        <h1 className="text-center text-gray-800 text-5xl font-bold my-20">
          Uttar Pradesh &apos;s #1 Muslim Matrimony Website
        </h1>
        <p className="text-center text-bold text-4xl mb-12 text-gray-600">
          &quot;Guided by Allah, United in Love: Your Journey to a Blessed Match&quot;
        </p>
      </div>
      <Card />
    </>
  );
}

export default About;
