import { ImLinkedin2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content rounded-xl mb-2">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Florian
          Hiso
        </p>
        <div className="flex flex-row gap-3">
          <a href="https://www.linkedin.com/in/florian-hiso-010b32295/">
            <ImLinkedin2
              size={22}
              className="cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            />
          </a>
          <a href="https://www.instagram.com/the_turing_point/">
            <FaInstagram
              size={22}
              className="cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            />
          </a>
        </div>
      </aside>
    </footer>
  );
}
