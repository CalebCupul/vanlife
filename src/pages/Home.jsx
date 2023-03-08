import homeImage from "../assets/image-53.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center font-inter text-white px-6 py-20"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      <h1 className="text-4xl font-extrabold">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="mt-5 font-medium text-base">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="vans">
        <p className="bg-custom-orange-300 w-full mt-12 py-2 rounded-md text-center font-semibold">Find your van</p>
      </Link>
    </section>
  );
}

export default Home;
