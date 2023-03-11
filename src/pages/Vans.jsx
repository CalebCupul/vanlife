import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id}>
      <Link to={`/vans/${van.id}`}>
        <img className="rounded-md" src={van.imageUrl} alt={van.description} />
        <div className="flex justify-between font-semibold text-xl mt-4">
            <p>{van.name}</p>
            <span>${van.price}</span>
        </div>
        <p className="text-right text-sm">/day</p>
        <span
            className={`py-2 capitalize px-4 ${
            van.type === "simple"
                ? "bg-interactive-states-100"
                : van.type === "luxury"
                ? "bg-interactive-states-200"
                : "bg-interactive-states-300"
            } text-custom-orange-200 rounded-md font-semibold`}
        >
            {van.type}
        </span>
      </Link>
    </div>
  ));

  return (
    <section className="bg-custom-orange-100 py-10 px-6 font-inter">
      <div>
        <h1 className="font-bold text-3xl">Explore our van options</h1>
        <div className="flex flex-wrap justify-between mt-4">
          <span className="py-2 px-6 bg bg-custom-orange-200">Simple</span>
          <span className="py-2 px-6 bg bg-custom-orange-200">Luxury</span>
          <span className="py-2 px-6 bg bg-custom-orange-200">Rugged</span>
          <span className="py-2 px-6 underline underline-offset-4">
            Clear filters
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-14">{vanElements}</div>
    </section>
  );
}

export default Vans;
