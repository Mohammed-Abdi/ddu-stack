export default function Workbook(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <g fill="none">
        <path
          fill="url(#fluentColorNotebook320)"
          d="M26 8h2.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H26zm2.25 6H26v4h2.25a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75M26 20h2.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H26z"
        ></path>
        <path
          fill="url(#fluentColorNotebook321)"
          d="M7.25 2A3.25 3.25 0 0 0 4 5.25v21.5A3.25 3.25 0 0 0 7.25 30h16.5A3.25 3.25 0 0 0 27 26.75V5.25A3.25 3.25 0 0 0 23.75 2z"
        ></path>
        <path
          fill="url(#fluentColorNotebook323)"
          fillOpacity={0.5}
          d="M7.25 2A3.25 3.25 0 0 0 4 5.25v21.5A3.25 3.25 0 0 0 7.25 30h16.5A3.25 3.25 0 0 0 27 26.75V5.25A3.25 3.25 0 0 0 23.75 2z"
        ></path>
        <path
          fill="url(#fluentColorNotebook322)"
          d="M10 7h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"
        ></path>
        <defs>
          <linearGradient
            id="fluentColorNotebook320"
            x1={26}
            x2={40.085}
            y1={-1.455}
            y2={26.107}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d373fc"></stop>
            <stop offset={1} stopColor="#2052cb"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorNotebook321"
            x1={1.125}
            x2={-0.306}
            y1={2}
            y2={33.347}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e587f2"></stop>
            <stop offset={1} stopColor="#816cde"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorNotebook322"
            x1={11.438}
            x2={20.88}
            y1={7}
            y2={15.278}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fdd3ff"></stop>
            <stop offset={1} stopColor="#f3d8ff"></stop>
          </linearGradient>
          <radialGradient
            id="fluentColorNotebook323"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(8.86458 31.02275 -148.45811 42.4211 14.542 .25)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.5} stopColor="#dd3ce2" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#dd3ce2"></stop>
          </radialGradient>
        </defs>
      </g>
    </svg>
  );
}
