import { useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

function HostVanInfo() {
    const [currentVan, setCurrentVan] = useOutletContext()

  return (
    <>
      <div className="mt-5 flex flex-col gap-2">
            <p><strong>Name:</strong> {currentVan.name}</p>
            <p><strong>Category:</strong> {currentVan.type}</p>
            <p><strong>Description:</strong> {currentVan.description}</p>
            <p><strong>Visibility:</strong> Public</p>
        </div>
    </>
  );
}

export default HostVanInfo;