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
        <div
          className="hero min-h-[89vh] bg-base-200 mb-[2em] rounded-xl "
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Hello there, General Kenoby
              </h1>
              <p className="mb-5  ">
                Are you looking for the best place to find information related
                to computer science? You are in the right place. <br /> Do you
                need useless information? You are in the right place. <br /> Do
                you need to waste your time? You are in the right place. <br />
                We are here to help you.
              </p>
              <button className="btn btn-primary">Come Child</button>
            </div>
          </div>
        </div>

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
