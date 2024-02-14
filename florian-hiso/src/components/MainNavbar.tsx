import { useEffect } from "react";
import { themeChange } from "theme-change";
import { FaFilePdf, FaRegFilePdf } from "react-icons/fa6";

export default function MainNavbar() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="hidden md:block">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-xl cursor-pointer" href="/#about">
            Florian Hiso
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end flex pr-[1em]">
            <input
              data-toggle-theme="lemonade,coffee"
              data-act-class="ACTIVECLASS"
              type="checkbox"
              className="toggle theme-controller"
            />
          </div>
          <div className="dropdown dropdown-end">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  href="/cv_Florian_Hiso_al.pdf"
                  download="cv_Florian_Hiso_al.pdf"
                >
                  Albanian CV
                  <FaFilePdf className="text-xl text-primary cursor-pointer" />
                </a>
              </li>
              <li>
                <a
                  href="/cv_Florian_Hiso_al.pdf"
                  download="cv_Florian_Hiso_al.pdf"
                >
                  English CV
                  <FaRegFilePdf className="text-xl text-primary cursor-pointer" />
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Posts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
