import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function VanDetail() {
    const params = useParams()
    const [van, setVan] = useState([])
    
    useEffect( () => {
        fetch(`/api/vans/${params.id}`)
            .then( res => res.json())
            .then( data => setVan(data.vans))
    }, [params.id])

  return (
    <section className="bg-custom-orange-100 font-inter py-10 px-6">
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
        <span className="underline underline-offset-4"><a href="/vans">Back to all vans</a></span>
      </div>
      <article className="mt-10">
        <img
          className="rounded-lg"
          src={van.imageUrl}
          alt={van.name}
        />
        <span
          className={`mt-10 inline-block py-2 capitalize px-4 ${
            van.type === "simple"
              ? "bg-interactive-states-100"
              : van.type === "luxury"
                ? "bg-interactive-states-200"
                : "bg-interactive-states-300"
          } text-custom-orange-200 rounded-md font-semibold`}
        >
          {van.type}
        </span>

        <p className="font-bold text-3xl mt-4">{van.name}</p>
        <p className="mt-4">
          <span className="font-bold text-2xl">${van.price}</span>/day
        </p>
        <p className="mt-4">
          {van.description}
        </p>
        <button className="mt-4 py-3 px-4 text-center bg-custom-orange-300 text-white font-bold w-full rounded-lg">Rent this van</button>
        
      </article>
    </section>
  );
}

export default VanDetail;
