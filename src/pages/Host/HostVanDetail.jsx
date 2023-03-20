import testVanImage from "../../assets/image-55.png";

function HostVanDetail() {
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
          <a href="/host/vans">Back to all vans</a>
        </span>
      </div>
      <article className="bg-white mt-8 p-5 rounded-lg">
        <div className="grid grid-cols-3">
          <img className="rounded-md" src={testVanImage} alt="" />
          <div className="col-span-2 flex flex-col gap-1 justify-center p-4">
            <span
              className={`w-fit py-2 capitalize px-4 bg-interactive-states-100 text-custom-orange-200 rounded-md font-semibold text-sm`}
            >
              Simple
            </span>
            <h1 className="font-bold text-2xl">Modest Explorer</h1>
            <p>
              <span className="font-bold text-2xl">$60</span>/day
            </p>
          </div>
        </div>
        <header className="mt-5">
          <nav className="text-custom-gray-100 font-semibold flex gap-8 items-center">
            <a
              className="hover:text-interactive-states-200 hover:underline hover:underline-offset-4 hover:font-bold"
              href="#"
            >
              Details
            </a>
            <a
              className="hover:text-interactive-states-200 hover:underline hover:underline-offset-4 hover:font-bold"
              href="#"
            >
              Details
            </a>

            <a
              className="hover:text-interactive-states-200 hover:underline hover:underline-offset-4 hover:font-bold"
              href="#"
            >
              Details
            </a>
          </nav>
        </header>
        <div className="mt-5 flex flex-col gap-2">
            <p><strong>Name:</strong> Modest Explorer</p>
            <p><strong>Category:</strong> Simple</p>
            <p><strong>Description:</strong> Description: The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</p>
            <p><strong>Visibility:</strong> Public</p>
        </div>
      </article>
    </section>
  );
}

export default HostVanDetail;

// <span
//           className={`mt-10 inline-block py-2 capitalize px-4 ${
//             van.type === "simple"
//               ? "bg-interactive-states-100"
//               : van.type === "luxury"
//                 ? "bg-interactive-states-200"
//                 : "bg-interactive-states-300"
//           } text-custom-orange-200 rounded-md font-semibold`}
//         >
//           {van.type}
//         </span>
