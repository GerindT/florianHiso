import { FaHouse } from "react-icons/fa6";
import { IoNewspaperSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function MobileNav() {
  const [isVisible, setIsVisible] = useState(true);

  const { pathname } = useLocation();

  const type = pathname.includes("projects")
    ? "projects"
    : pathname.includes("blogs")
    ? "blogs"
    : null;

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      setIsVisible(!isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`block md:hidden fixed z-50 w-[70%] h-16 max-w-lg -translate-x-1/2 bg-base-100 border border-base-200 rounded-full bottom-4 left-1/2 ${
        isVisible ? "show" : "hide"
      }`}
    >
      <div className="grid h-full w-full grid-cols-3 mx-auto">
        <button
          data-tooltip-target="tooltip-home"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-base-200  group"
        >
          <a href={type != null ? "/" : "#about"}>
            <FaHouse className="w-5 h-5 mb-1 text-primary-500  group-hover:text-primary-600 " />
          </a>
        </button>
        <button
          data-tooltip-target="tooltip-home"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5  hover:bg-base-200  group"
        >
          <a href={type != null ? "/" : "#projects"}>
            <IoNewspaperSharp className="w-5 h-5 mb-1 text-primary-500  group-hover:text-primary-600 " />
          </a>
        </button>
        <button
          data-tooltip-target="tooltip-home"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-base-200  group"
        >
          <div className="dropdown dropdown-top">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="/avatar.jpg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28"
            >
              <li>
                <div className="dropdown dropdown-end bg-base-100">
                  <input
                    type="checkbox"
                    value="lemonade"
                    className="toggle theme-controller"
                  />
                </div>
              </li>
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
}
