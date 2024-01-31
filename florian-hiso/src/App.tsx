import "./App.css";
import MainNavbar from "./components/MainNavbar";
import Posts from "./components/Posts";
import Timeline from "./components/Timeline";
import Stats from "./components/Stats";
import General from "./components/General";

const colors = [
  "badge badge-default",
  "badge badge-neutral",
  "badge badge-primary",
  "badge badge-secondary",
  "badge badge-accent",
  "badge badge-ghost",
  "badge badge-outline",
  "badge badge-success",
  "badge badge-error",
  "badge badge-warning",
  "badge badge-info",
  "badge badge-dark",
];

function App() {
  return (
    <>
      <div>
        <MainNavbar />

        <div className=" grid grid-cols-1  md:grid-cols-2 gap-[2em] mb-[2em]">
          <Posts />
          <div>
            <Stats />
            <General />
            <Timeline />
            <div className="w-86 pt-[1em] flex flex-wrap gap-1  ">
              {Array.from({ length: 5 }).map(() => (
                <>
                  {colors
                    .sort(() => Math.random() - 0.5) // Shuffle the array
                    .map((color, i) => (
                      <div
                        key={i}
                        className={`${color} cursor-pointer  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105`}
                      >
                        {color.split("-")[1]}
                      </div>
                    ))}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
