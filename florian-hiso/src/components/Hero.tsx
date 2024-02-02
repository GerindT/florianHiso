export default function Hero() {
  return (
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
            Are you looking for the best place to find information related to
            computer science? You are in the right place. <br /> Do you need
            useless information? You are in the right place. <br /> Do you need
            to waste your time? You are in the right place. <br />
            We are here to help you.
          </p>
          <button className="btn btn-primary">Come Child</button>
        </div>
      </div>
    </div>
  );
}
