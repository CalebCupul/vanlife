import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  return (
    <section className="font-inter bg-custom-orange-100">
      <header className="bg-custom-orange-100 px-4 py-8 flex justify-between text-inter">
        <nav className="text-custom-gray-100 font-semibold flex gap-8 items-center">
          <NavLink
            to="/host"
            end
            className={ ({isActive}) => `${isActive ? 'text-interactive-states-200 underline underline-offset-4 ' : ''}hover:text-interactive-states-200 hover:underline hover:underline-offset-4` }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/host/income"
            className={ ({isActive}) => `${isActive ? 'text-interactive-states-200 underline underline-offset-4 ' : ''}hover:text-interactive-states-200 hover:underline hover:underline-offset-4` }
          >
            Income
          </NavLink>
          <NavLink
            to="/host/vans"
            className={ ({isActive}) => `${isActive ? 'text-interactive-states-200 underline underline-offset-4 ' : ''}hover:text-interactive-states-200 hover:underline hover:underline-offset-4` }
          >
            Vans
          </NavLink>
          <NavLink
            to="/host/reviews"
            className={ ({isActive}) => `${isActive ? 'text-interactive-states-200 underline underline-offset-4 ' : ''}hover:text-interactive-states-200 hover:underline hover:underline-offset-4` }
          >
            Reviews
          </NavLink>
        </nav>
      </header>
        <Outlet />
    </section>
  );
}

export default HostLayout;
