import { Link } from "react-router-dom";
import { formatDateDifference } from "../helper/dateHelper.ts";
import { IoIosTime } from "react-icons/io";

type Project = {
  id: number;
  title: string;
  content: string;
  url: string;
  createdat: string;
  tags: object;
};

type Blog = {
  id: number;
  title: string;
  content: string;
  createdat: string;
  tags: object;
};

type Props = {
  projectList: Project[];
  blogList: Blog[];
};

export default function Posts({ projectList, blogList }: Props) {
  return (
    <div
      className="grid grid-cols-1 gap-[1em] md:grid-cols-2 xl:grid-cols-3 "
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(min-content, 1fr))",
      }}
      id="projects"
    >
      {projectList.map((project: Project, i: number) => (
        <div key={i} className="card bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{project.title}</h2>
            <h3>
              Florian Hiso <b>· </b>
              <a className="link">{project.url}</a>
            </h3>
            <p>{project.content.substring(0, 200)}...</p>
            <div className="badge  p-[0.8em] badge-primary opacity-80 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <IoIosTime /> {formatDateDifference(project.createdat)}
            </div>
            <div className="flex gap-1">
              {Object.entries(project.tags).map(([key, value], i) => (
                <div
                  key={i}
                  className={`badge ${value} cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 `}
                >
                  {key}
                </div>
              ))}
            </div>

            <div className="card-actions justify-end">
              <Link to={`/projects/${project.id}`}>
                <button className="btn btn-primary">Take me there</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      {blogList.map((blog: Blog, i: number) => (
        <div
          key={i}
          className="card bg-primary shadow-xl text-primary-content  "
        >
          <div className="card-body ">
            <h2 className="card-title">{blog.title}</h2>
            <h3>Florian Hiso</h3>
            <p>{blog.content.substring(0, 200)}...</p>
            <div className="badge p-[0.8em] opacity-80 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <IoIosTime /> {formatDateDifference(blog.createdat)}
            </div>
            <div className="flex gap-1">
              {Object.entries(blog.tags).map(([key, value], i) => (
                <div
                  key={i}
                  className={`badge ${value} cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 `}
                >
                  {key}
                </div>
              ))}
            </div>
            <div className="card-actions justify-end">
              <Link to={`/blogs/${blog.id}`}>
                <button className="btn text-primary">Take me there</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
