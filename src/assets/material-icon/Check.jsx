export default function Check(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 16 16"
      {...props}
    >
      <g fill="none">
        <path
          fill="url(#fluentColorCheckmarkCircle160)"
          d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8"
        ></path>
        <path
          fill="url(#fluentColorCheckmarkCircle161)"
          d="M10.12 6.164L7.25 9.042L5.854 7.646a.5.5 0 1 0-.708.708l1.75 1.75a.5.5 0 0 0 .708 0l3.224-3.234a.5.5 0 0 0-.708-.706"
        ></path>
        <defs>
          <linearGradient
            id="fluentColorCheckmarkCircle160"
            x1={2.429}
            x2={10.71}
            y1={4.25}
            y2={12.854}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#52d17c"></stop>
            <stop offset={1} stopColor="#22918b"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorCheckmarkCircle161"
            x1={6.12}
            x2={7.076}
            y1={6.449}
            y2={11.21}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff"></stop>
            <stop offset={1} stopColor="#e3ffd9"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}
