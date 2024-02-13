type Timeline = {
  year: string;
  content: string;
  fullDate: string;
  createdat: string;
  left: number;
  right: number;
};

export default function Timeline({
  timelineList,
}: {
  timelineList: Timeline[];
}) {
  return (
    <ul className="timeline timeline-vertical md:timeline-horizontal justify-center  ml-[4em] md:ml-[0em] ">
      {timelineList.map((timeline: Timeline, i: number) => (
        <li className="w-[5vw] " key={i}>
          {i !== 0 && timeline.left !== 0 && <hr className="bg-primary" />}

          <div className="timeline-start">{timeline.year}</div>

          <div
            className="timeline-middle tooltip tooltip-bottom"
            data-tip={timeline.content}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 "
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="md:hidden timeline-end timeline-box w-[50vw] bg-base-200">
            {timeline.content}
          </div>
          {i !== timelineList.length - 1 && timeline.right !== 0 && (
            <hr className="bg-primary" />
          )}
        </li>
      ))}
    </ul>
  );
}
