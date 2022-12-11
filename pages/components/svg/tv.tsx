import * as React from "react"

const TvSvg = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-tv"
    {...props}
  >
    <rect x={2} y={7} width={20} height={15} rx={2} ry={2} />
    <path d="m17 2-5 5-5-5" />
  </svg>
)

export default TvSvg
