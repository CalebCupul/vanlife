import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
    const [currentVan, setCurrentVan] = useOutletContext()

  return (
    <>
      <section className="mt-5 grid grid-cols-4 gap-3">
        <img className="rounded-md" src={currentVan.imageUrl} alt={currentVan.name} />
      </section>
    </>
  );
}

export default HostVanPhotos;
