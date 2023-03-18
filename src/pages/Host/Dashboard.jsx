import { Outlet } from "react-router-dom";
import starImage from "../../assets/star3.png";
import testVanImage from "../../assets/image-55.png";

function Dashboard() {
  return (
    <section className="font-inter">
      <div className="bg-custom-orange-200 px-4 py-6">
        <h1 className="text-custom-gray-200 font-bold text-4xl">Welcome!</h1>
        <div className="flex justify-between mt-4 text-custom-gray-100">
          <p>
            Income last{" "}
            <span className="font-bold underline underline-offset-4">
              30 days
            </span>
          </p>
          <p className="text-custom-gray-200">Details</p>
        </div>
        <p className="text-custom-gray-200 font-extrabold text-5xl mt-4">
          $2,260
        </p>
      </div>
      <div className="bg-custom-orange-500 flex justify-between px-4 py-6">
        <div className="flex gap-2 place-items-center">
          <p className="font-bold">Review score</p>
          <img className="h-4 w-4" src={starImage} alt="Star image" />
          <span className="font-bold">
            5.0<span className="text-custom-gray-100">/5</span>
          </span>
        </div>
        <p className="text-custom-gray-200">Details</p>
      </div>
      <div className="bg-custom-orange-100 py-6">
        <div className="flex justify-between px-4">
          <h2 className="font-bold text-2xl">Your listed vans</h2>
          <p className="text-custom-gray-200">View all</p>
        </div>
        <div className="flex flex-col gap-4 px-4 mt-4">
          <article className="flex justify-between py-4 px-6 bg-white rounded-lg place-items-center">
            <div className="flex gap-4 place-items-center">
              <img className="w-16 rounded-lg" src={testVanImage} alt="" />
              <div>
                <p className="text-xl font-semibold">Modest Explorer</p>
                <p className="text-custom-gray-100">$60/day</p>
              </div>
            </div>
            <p>Edit</p>
          </article>
          <article className="flex justify-between py-4 px-6 bg-white rounded-lg place-items-center">
            <div className="flex gap-4 place-items-center">
              <img className="w-16 rounded-lg" src={testVanImage} alt="" />
              <div>
                <p className="text-xl font-semibold">Modest Explorer</p>
                <p className="text-custom-gray-100">$60/day</p>
              </div>
            </div>
            <p>Edit</p>
          </article>
          <article className="flex justify-between py-4 px-6 bg-white rounded-lg place-items-center">
            <div className="flex gap-4 place-items-center">
              <img className="w-16 rounded-lg" src={testVanImage} alt="" />
              <div>
                <p className="text-xl font-semibold">Modest Explorer</p>
                <p className="text-custom-gray-100">$60/day</p>
              </div>
            </div>
            <p>Edit</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
