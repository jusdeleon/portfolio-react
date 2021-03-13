import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-green-500 md:border-b-4 md:border-green-600 mb-10">
      <div className="md:container md:mx-auto">
        <div className="text-white text-center md:flex md:justify-between md:items-center md:text-left md:p-5">
          <div className="py-5 md:py-0">
            <h1 className="text-4xl">
              <NavLink to="/">Justin De Leon</NavLink>
            </h1>
            <span className="font-sans-secondary text-sm font-bold">Web Developer</span>
          </div>

          <div className="text-lg bg-green-600 md:bg-transparent p-2 md:p-0">
            <NavLink exact to="/" className="px-4 hover:text-green-800" activeClassName="text-green-800">Portfolio</NavLink>
            <NavLink to="/about" className="px-4 hover:text-green-800" activeClassName="text-green-800">About</NavLink>
            <NavLink to="/contact" className="px-4 hover:text-green-800" activeClassName="text-green-800">Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;