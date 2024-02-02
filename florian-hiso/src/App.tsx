import "./App.css";
import MainNavbar from "./components/MainNavbar";
import Posts from "./components/Posts";
import Timeline from "./components/Timeline";
import Stats from "./components/Stats";
import General from "./components/General";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BadgeList from "./components/BadgeList";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <>
      <div>
        <MainNavbar />
        <MobileNav />
        <Hero />
        <div className=" grid grid-cols-1  md:grid-cols-2 gap-[2em] mb-[2em]">
          <Posts />
          <div>
            <Stats />
            <General />
            <Timeline />
            <BadgeList />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
