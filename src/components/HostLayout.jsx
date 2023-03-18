import { Link, Outlet } from "react-router-dom";

function HostLayout() {
  return (
    <section className="font-inter bg-custom-orange-100">
      <header className="bg-custom-orange-100 px-4 py-8 flex justify-between text-inter">
        <nav className="text-custom-gray-100 font-semibold flex gap-8 items-center">
          <Link
            to="/host"
            className="hover:text-interactive-states-200 hover:underline hover:underline-offset-4 active:text-interactive-states-200 active:underline active:underline-offset-4"
          >
            Dashboard
          </Link>
          <Link
            to="/host/income"
            className="hover:text-interactive-states-200 hover:underline hover:underline-offset-4 active:text-interactive-states-200 active:underline active:underline-offset-4"
          >
            Income
          </Link>
          <Link
            to="/host/vans"
            className="hover:text-interactive-states-200 hover:underline hover:underline-offset-4 active:text-interactive-states-200 active:underline active:underline-offset-4"
          >
            Vans
          </Link>
          <Link
            to="/host/reviews"
            className="hover:text-interactive-states-200 hover:underline hover:underline-offset-4 active:text-interactive-states-200 active:underline active:underline-offset-4"
          >
            Reviews
          </Link>
        </nav>
      </header>
        <Outlet />
    </section>
  );
}

export default HostLayout;
