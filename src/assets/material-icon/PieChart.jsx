export default function PieChart(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="none">
        <path
          fill="url(#fluentColorDataPie200)"
          d="M8.003 4.07C8.55 3.994 9 4.449 9 5v6h6c.552 0 1.008.45.93.997A7.001 7.001 0 0 1 2 11a7 7 0 0 1 6.003-6.93"
        ></path>
        <path
          fill="url(#fluentColorDataPie201)"
          d="M17.062 10c.498 0 .927-.366.937-.864L18 9a7 7 0 0 0-7.136-6.999c-.498.01-.864.44-.864.937V9a1 1 0 0 0 1 1z"
        ></path>
        <defs>
          <linearGradient
            id="fluentColorDataPie200"
            x1={15.938}
            x2={-6.363}
            y1={18}
            y2={-4.301}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6d37cd"></stop>
            <stop offset={0.641} stopColor="#ea71ef"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorDataPie201"
            x1={17.333}
            x2={11.6}
            y1={8.533}
            y2={2}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e23cb4"></stop>
            <stop offset={1} stopColor="#ea71ef"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}
