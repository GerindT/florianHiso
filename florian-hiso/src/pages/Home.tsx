import MainNavbar from "../components/MainNavbar";
import Posts from "../components/Posts";
import Timeline from "../components/Timeline";
import Stats from "../components/Stats";
import General from "../components/General";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BadgeList from "../components/BadgeList";
import MobileNav from "../components/MobileNav";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [badges, setBadges] = useState([]);
  const [timeline, setTimeline] = useState([]);

  const apiUrl = !import.meta.env.DEV
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API;
  useEffect(() => {
    fetch(apiUrl + "/getAllData")
      .then((response) => response.json())
      .then(
        (data) => {
          setBlogs(data.blogs);
          setProjects(data.projects);
          setBadges(data.badges);
          setTimeline(data.timeline);
        },
        (error) => console.log(error)
      );
  }, []);

  return (
    <div>
      <MainNavbar />
      <MobileNav />
      <Hero />
      <div className=" grid grid-cols-1  gap-[2em] mb-[2em] max-w-full md:max-w-[80vw] justify-center  mx-[1em] md:mx-auto">
        <div className="max-w-full mx-[1em] md:max-w-[70vw] md:mx-auto ">
          <Stats />
          <General />
          <Timeline />
          <BadgeList badgeList={badges} />
        </div>
        <Posts />
      </div>
      <Footer />
    </div>
  );
}
