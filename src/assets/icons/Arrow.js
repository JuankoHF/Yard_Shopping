import * as React from "react"

const Arrow = (props) => (
  <svg
    width={7}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.999 5.947a.454.454 0 0 0-.114-.273L1.796 1.131a.456.456 0 1 0-.678.61L4.934 5.98l-3.816 4.238a.456.456 0 1 0 .678.61l4.09-4.543a.454.454 0 0 0 .113-.337Z"
      fill="#BFBFBF"
      stroke="#BFBFBF"
      strokeWidth={1.2}
    />
  </svg>
)

export default Arrow