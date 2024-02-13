import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MainNavbar from "../components/MainNavbar";
import MobileNav from "../components/MobileNav";
import Footer from "../components/Footer";
import { IoIosTime } from "react-icons/io";
import { formatDateDifference } from "../helper/dateHelper.ts";

interface Post {
  id: number;
  title: string;
  content: string;
  url: string;
  createdat: string;
  tags: object;
}

export default function SinglePost() {
  const { pathname } = useLocation();
  const { id } = useParams();

  const [post, setPost] = useState({} as Post);
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = !import.meta.env.DEV
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API;
  const type = pathname.includes("projects") ? "projects" : "blogs";

  useEffect(() => {
    const fullApiUrl = apiUrl + "/singlePost/" + type;

    fetch(fullApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }), // sending the id in the request body
    })
      .then((response) => response.json())
      .then(
        (data) => {
          setPost(data[0]);
          setIsLoading(false);
        },
        (error) => console.log(error)
      );
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <MainNavbar />
      <MobileNav />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1  ">
          <div className="text-sm breadcrumbs ml-[0.4em]">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a>{type.charAt(0).toUpperCase() + type.slice(1)}</a>
              </li>
              <li>{post.title}</li>
            </ul>
          </div>

          <div className="card  bg-base-300 shadow-xl mt-[0.2em] mb-[2em]">
            <div className="card-body">
              <h2 className="card-title"> {post.title}</h2>
              <h3>Florian Hiso</h3>
              <p className="opacity-80"> {post.content} </p>
              {type == "projects" && (
                <p>
                  For more information <a className="link "> {post.url}</a>
                </p>
              )}
              <div className="badge p-[0.8em] badge-primary opacity-80 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <IoIosTime /> {formatDateDifference(post.createdat)}
              </div>
              <div className="flex gap-1">
                {Object.entries(post.tags).map(([key, value], i) => (
                  <div
                    key={i}
                    className={`badge ${value} cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 `}
                  >
                    {key}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
