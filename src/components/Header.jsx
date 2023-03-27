import { NavLink } from "react-router-dom"
function Header(){
    return (
        <header className="bg-custom-orange-100 px-4 py-8 flex justify-between text-inter">
        <NavLink to="." className="text-custom-gray-900 font-black text-2xl">
          #VANLIFE
        </NavLink>
        <nav className="text-custom-gray-100 font-semibold flex gap-8 items-center">
        <NavLink
            to="host"
            className={ ({isActive}) => `${isActive ? 'text-interactive-states-200 underline underline-offset-4 ' : ''}hover:text-interactive-states-200 hover:underline hover:underline-offset-4` }
            >
            Host
          </NavLink>
          <NavLink
            to="about"
            className={ ({isActive}) => `${isActive ? 'text-interactive-states-200 underline underline-offset-4 ' : ''}hover:text-interactive-states-200 hover:underline hover:underline-offset-4` }
          >
            About
          </NavLink>
          <NavLink
            to="vans"
            className={ ({isActive}) => `${isActive ? 'text-interactive-states-200 underline underline-offset-4 ' : ''}hover:text-interactive-states-200 hover:underline hover:underline-offset-4` }
          >
            Vans
          </NavLink>
        </nav>
      </header>
    )
}

export default Header