export default function General() {
  return (
    <div className="mb-[1em] " id="about">
      <div className="collapse collapse-plus bg-base-200 mb-[1em]">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Who am I?</div>
        <div className="collapse-content">
          <p>
            I am a Software Developer and Artificial Intelligence Master's
            student based in Tirana, Albania. My background is deeply rooted in
            tech education, having spent several years teaching programming and
            algorithms to students of all ages. Today, I am primarily passionate
            about research, teaching, and developing AI. My work sits at the
            intersection of practical software engineering and advanced machine
            learning.
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
            This website is my digital workspace and professional portfolio — a
            curated collection of my journey through computer science and AI.
            Here you will find my <strong>Projects</strong> (from modern
            frontend interfaces to backend AI integrations), my{" "}
            <strong>Academic Work</strong> (university thesis research on Deep
            Reinforcement Learning), and my <strong>Mission</strong> — a
            continued dedication to tech mentorship, education, and ethical AI
            innovation.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">What I Do</div>
        <div className="collapse-content">
          <p>
            <strong>AI &amp; Machine Learning:</strong> RAG models, NLP, and
            Deep Reinforcement Learning.
          </p>
          <p className="mt-2">
            <strong>Software Development:</strong> Building intuitive interfaces
            and backend logic (React, JavaScript, Tailwind, Python).
          </p>
          <p className="mt-2">
            <strong>Tech Education:</strong> Teaching coding fundamentals,
            algorithms, and computational thinking.
          </p>
        </div>
      </div>
    </div>
  );
}
