export default function General() {
  return (
    <div className="mb-[1em] " id="about">
      <div className="collapse collapse-plus bg-base-200 mb-[1em]">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Who am I?</div>
        <div className="collapse-content">
          <p>
            I am a dedicated student pursuing computer science, particularly
            focusing on data science and artificial intelligence. My passion
            lies in academic research and teaching, with years of experience in
            IT and mentoring.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-[1em]">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What is this website about?
        </div>
        <div className="collapse-content">
          <p>
            This website is my platform for sharing my research updates,
            insights, and educational content related to computer science. It's
            where I showcase my expertise and contribute to knowledge sharing in
            my field.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">What awaits?</div>
        <div className="collapse-content">
          <p>
            Visitors to my website can expect to find valuable resources,
            updates on my latest research endeavors. It's a space where they can
            engage with my work, gain insights, and potentially connect with me
            for further collaboration or guidance.
          </p>
        </div>
      </div>
    </div>
  );
}
