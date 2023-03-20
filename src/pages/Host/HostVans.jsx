import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HostVans() {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);

  const hostVansElements = hostVans.map((van) => (
    <article
      key={van.id}
      className="flex justify-between py-4 px-6 bg-white rounded-lg place-items-center"
    >
      <Link to={`/host/vans/${van.id}`}>
        <div className="flex gap-4 place-items-center">
          <img className="w-16 rounded-lg" src={van.imageUrl} alt={van.name} />
          <div>
            <p className="text-xl font-semibold">{van.name}</p>
            <p className="text-custom-gray-100">${van.price}/day</p>
          </div>
        </div>
      </Link>
    </article>
  ));

  return (
    <section className="font-inter bg-custom-orange-100 px-4 py-6">
      <h1 className="text-3xl font-bold">Your listed vans</h1>
      <div className="bg-custom-orange-100 py-6">
        <div className="flex flex-col gap-4 mt-4">{hostVansElements}</div>
      </div>
    </section>
  );
}

export default HostVans;
