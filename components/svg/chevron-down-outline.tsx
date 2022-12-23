import * as React from "react"
import { SvgProps } from "../../types/types"

const ChevronDownOutlineSvg = (props: SvgProps) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  fill="currentColor"
  className="bi bi-chevron-down"
  {...props}
>
  <path
    fillRule="evenodd"
    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
  />
</svg>
)

export default ChevronDownOutlineSvg
