type Project = {
  title: string;
  content: string;
  url: string;
  createdat: string;
};

type Blog = {
  title: string;
  content: string;
  createdat: string;
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
    >
      {projectList.map((project: Project, i: number) => (
        <div key={i} className="card bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{project.title}</h2>
            <p>{project.content}</p>
            <p>{project.url}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Take me there</button>
            </div>
          </div>
        </div>
      ))}
      {blogList.map((blog: Blog, i: number) => (
        <div key={i} className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://assets.teenvogue.com/photos/5e6bffbbdee1770008c6d9bd/16:9/w_2560%2Cc_limit/GettyImages-577674005.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <p>
              {blog.content} <br />
              {blog.createdat.split("T")[0]}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Take me there</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
