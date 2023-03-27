import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  
    const [currentVan, setCurrentVan] = useOutletContext()

    return (
    <>
      <p className="mt-5">
        <span className="font-bold text-2xl">${currentVan.price}</span>
        /day
      </p>
    </>
  );
}

export default HostVanPricing;
