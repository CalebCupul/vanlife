import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import testVanImage from "../../assets/image-55.png";

function HostVanDetail() {
  const { id } = useParams();

  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans[0]));
  }, []);

  if (!currentVan) {
    return <h1 className="font-inter">Loading ...</h1>
  }

  return (
    <section className="font-inter bg-custom-orange-100 px-4 py-8">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="text-gray-600 bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        <span className="underline underline-offset-4">
            <Link to=".." relative="path">Back to all vans</Link>
        </span>
      </div>
      <article className="bg-white mt-8 p-5 rounded-lg">
        <div className="grid grid-cols-3">
          <img className="rounded-md" src={currentVan.imageUrl} alt="" />
          <div className="col-span-2 flex flex-col gap-1 justify-center p-4">
            <span
              className={`w-fit py-2 capitalize px-4 ${
                currentVan.type === "simple"
                  ? "bg-interactive-states-100"
                  : currentVan.type === "luxury"
                  ? "bg-interactive-states-200"
                  : "bg-interactive-states-300"
              } text-custom-orange-200 rounded-md font-semibold text-sm`}
            >
              {" "}
              {currentVan.type}
            </span>
            <h1 className="font-bold text-2xl">{currentVan.name}</h1>
            <p>
              <span className="font-bold text-2xl">${currentVan.price}</span>
              /day
            </p>
          </div>
        </div>
        <header className="mt-5">
          <nav className="text-custom-gray-100 font-semibold flex gap-8 items-center">
            <NavLink
              to="."
              className={ ({isActive}) => `${isActive ? 'text-interactive-states-200 underline underline-offset-4 ' : ''}hover:text-interactive-states-200 hover:underline hover:underline-offset-4` }
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={ ({isActive}) => `${isActive ? 'text-interactive-states-200 underline underline-offset-4 ' : ''}hover:text-interactive-states-200 hover:underline hover:underline-offset-4` }
              >
              Pricing
            </NavLink>

            <NavLink
              to="photos"
              className={ ({isActive}) => `${isActive ? 'text-interactive-states-200 underline underline-offset-4 ' : ''}hover:text-interactive-states-200 hover:underline hover:underline-offset-4` }
              >
              Photos
            </NavLink>
          </nav>
        </header>
        <Outlet context={[currentVan, setCurrentVan]} />
      </article>
    </section>
  );
}

export default HostVanDetail;
