export default function Hero() {
  return (
    <div
      className="hero min-h-[89vh] bg-base-200 mb-[2em] rounded-xl "
      style={{
        backgroundImage: "url(/hero.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Hi, I'm Florian Hiso.
          </h1>
          <p className="mb-5  ">
            A Software Developer and MSc student passionate about research,
            teaching, and developing AI.
          </p>
          <button className="btn btn-primary">
            <a href="#about"> Learn More </a>
          </button>
        </div>
      </div>
    </div>
  );
}
