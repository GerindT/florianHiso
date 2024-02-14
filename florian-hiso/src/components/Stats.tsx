import { FaFilePdf, FaRegFilePdf } from "react-icons/fa6";
export default function Stats() {
  return (
    <div className="mockup-code mt-[1em] max-w-[80vw]">
      <pre data-prefix="$">
        <code>pip install Awesome_Projects</code>
      </pre>
      <pre data-prefix=">" className="text-warning">
        <code>Installing from Florian_Hiso...</code>
      </pre>
      <pre data-prefix=">" className="text-success">
        <code>Done!🎉</code>
      </pre>
      <div className="flex gap-3 ml-[1.5em] mt-[0.5em]">
        <a href="/cv_Florian_Hiso_al.pdf" download="cv_Florian_Hiso_al.pdf">
          <FaFilePdf className="text-3xl text-primary cursor-pointer" />
        </a>
        <a href="/cv_Florian_Hiso_en.pdf" download="cv_Florian_Hiso_en.pdf">
          <FaRegFilePdf className="text-3xl text-primary cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
