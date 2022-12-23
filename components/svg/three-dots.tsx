import * as React from "react"
import { SvgProps } from "../../types/types"

const ThreeDotsSvg = (props: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    fill="currentColor"
    className="bi bi-three-dots"
    {...props}
  >
    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
  </svg>
)

export default ThreeDotsSvg
