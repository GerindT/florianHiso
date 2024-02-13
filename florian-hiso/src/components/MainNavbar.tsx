export default function MainNavbar() {
  return (
    <div className="hidden md:block">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Florian Hiso</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end flex pr-[1em]">
            <input
              type="checkbox"
              value="lemonade"
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
