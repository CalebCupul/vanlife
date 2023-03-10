import vanImg from "../assets/image-54.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="bg-custom-orange-100 font-inter">
      <img src={vanImg} alt="Van image" />
      <article className="p-5 mt-5">
        <h1 className="text-3xl font-bold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="mt-5">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="mt-4">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="bg-custom-orange-400 p-8 mt-10 rounded-md">
          <h2 className="font-bold text-2xl">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link to="/vans">
            <p className="mt-4 text-white bg-black w-fit py-2 px-5 rounded-xl">Explore our vans</p>
          </Link>
        </div>
      </article>
    </section>
  );
}

export default About;
