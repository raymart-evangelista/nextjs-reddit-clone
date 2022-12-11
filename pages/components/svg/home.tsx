import * as React from "react"

const HomeSvg = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2rem"
    height="1.5rem"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-home"
    {...props}
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 22V12h6v10" />
  </svg>
)

export default HomeSvg
