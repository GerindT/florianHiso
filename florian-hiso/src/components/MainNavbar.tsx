export default function MainNavbar() {
  return (
    <div>
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
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://media.licdn.com/dms/image/D4E03AQGu5poTTxvRaQ/profile-displayphoto-shrink_200_200/0/1697216965074?e=1712188800&v=beta&t=QH3tZ7ERRKlvKM2g4af33JXljvU2PDZsuh9_zvFaeTw"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
