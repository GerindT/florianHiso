export default function General() {
  return (
    <div className="mb-[1em]">
      <div className="collapse collapse-plus bg-base-200 mb-[1em]">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Kush jam un</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-[1em]">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Qysh jam un</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Pse jam un</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
