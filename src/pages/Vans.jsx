import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Vans(){

    const [vans, setVans] = useState(getVans())

    function getVans(){
        fetch('')
    }
 
    return (
        <section className="bg-custom-orange-100 py-10 px-6 font-inter">
            <div>
                <h1 className="font-bold text-3xl">Explore our van options</h1>
                <div className="flex justify-between mt-4">
                    <span className="py-2 px-6 bg bg-custom-orange-200">Simple</span>
                    <span className="py-2 px-6 bg bg-custom-orange-200">Luxury</span>
                    <span className="py-2 px-6 bg bg-custom-orange-200">Rugged</span>
                    <span className="py-2 px-6 underline underline-offset-4">Clear filters</span>

                </div>
            </div>
            <div>
                {/* Vans */}
            </div>
        </section>
    )
}

export default Vans;