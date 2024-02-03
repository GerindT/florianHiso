export default function Posts() {
  return (
    <div
      className="grid grid-cols-1 gap-[1em] md:grid-cols-2 xl:grid-cols-3 "
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(min-content, 1fr))",
      }}
    >
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="card bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">New Blog Post</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                eum repudiandae beatae sint, officia possimus? Eos iure autem,
                dolorum vitae obcaecati quisquam velit, est perferendis neque,
                labore amet quasi aliquam?
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Take me there</button>
              </div>
            </div>
          </div>
        ))}
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="card bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://assets.teenvogue.com/photos/5e6bffbbdee1770008c6d9bd/16:9/w_2560%2Cc_limit/GettyImages-577674005.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New Research</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                eum repudiandae beatae sint, officia possimus? Eos iure autem,
                dolorum vitae obcaecati quisquam velit, est perferendis neque,
                labore amet quasi aliquam?
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
