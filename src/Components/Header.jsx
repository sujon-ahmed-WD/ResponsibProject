import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

 

const Header = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
      // Theme
      const handleToggle = (e) => {
        if (e.target.checked) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };
    
      useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]);
      const NavItem = (
        <>
          <div className=" flex flex-col md:flex-row justify-center  md:gap-8 gap-8 ">
            <li>
              <NavLink
                className={(isactive) =>
                  isactive ? "text-primary font-bold" : "font-bold"
                }
                to="/addtourist"
              >
                AddTourist
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(isactive) =>
                  isactive ? "text-primary font-bold" : "font-bold"
                }
                to="/alltourist"
              >
                AllTourist
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(isactive) =>
                  isactive ? "text-primary font-bold" : "font-bold"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
          </div>
        </>
      );
    
    return (
      <nav>
        <div className="navbar shadow-lg px-4    z-10   bg-green-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className=" menu menu-sm dropdown-content   bg-green-200  "
              >
                <div className="flex flex-row">{NavItem}</div>
                <label className="flex md:hidden cursor-pointer gap-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <input
                    onClick={handleToggle}
                    type="checkbox"
                    value="synthwave"
                    className="toggle theme-controller"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </label>
              </ul>
            </div>
            <a className="text-4xl bg-300%   font-bold bg-gradient-to-r from-red-700 via-red-200 to-green-400 text-transparent bg-clip-text animate-gradient">
              Ahmad
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>{NavItem}</li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className=" hidden  sm:flex gap-2 p-2">
              <a
                href="#_"
                className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500   hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <Link to='/ragister'><span className="relative">Ragister</span></Link>
              </a>
              <a
                href="#_"
                className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500   hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <Link to='/login'><span className="relative">Login</span></Link>
              </a>
            </div>

            <label className="md:flex hidden cursor-pointer gap-2 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                onClick={handleToggle}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
      </nav>
    );
};

export default Header;
 