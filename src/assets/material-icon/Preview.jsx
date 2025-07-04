export default function Preview(props) {
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
          fill="url(#fluentColorGlobe201)"
          d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
        ></path>
        <path
          fill="url(#fluentColorGlobe200)"
          fillRule="evenodd"
          d="M7.853 2.291a7 7 0 0 0-.816 1.51c-.368.906-.65 1.995-.826 3.199H2.58q-.195.485-.33 1h3.84a22 22 0 0 0 .001 4h-3.84q.135.515.33 1h3.63c.176 1.204.458 2.293.826 3.199a7 7 0 0 0 .816 1.51A8 8 0 0 0 10 18a8 8 0 0 0 2.147-.291a7 7 0 0 0 .816-1.51c.368-.906.65-1.995.826-3.199h3.63q.195-.485.329-1h-3.84a21.6 21.6 0 0 0 0-4h3.84a8 8 0 0 0-.33-1H13.79c-.176-1.204-.458-2.293-.826-3.199a7 7 0 0 0-.816-1.51A8 8 0 0 0 10 2a8 8 0 0 0-2.147.291M7.223 7c.166-1.076.42-2.035.74-2.822c.298-.733.642-1.292 1.003-1.66C9.324 2.153 9.672 2 10 2s.676.153 1.034.518c.36.368.705.927 1.003 1.66c.32.787.574 1.746.74 2.822zM10 18c.328 0 .676-.153 1.034-.518c.36-.368.705-.927 1.003-1.66c.32-.787.574-1.746.74-2.822H7.223c.167 1.076.421 2.035.741 2.822c.298.733.642 1.292 1.003 1.66c.358.365.706.518 1.034.518m-3-8c0 .692.033 1.362.096 2h5.808A21 21 0 0 0 13 10c0-.692-.033-1.362-.096-2H7.096A21 21 0 0 0 7 10"
          clipRule="evenodd"
        ></path>
        <defs>
          <radialGradient
            id="fluentColorGlobe200"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(-135 10.4 3.895)scale(12.7313)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#25a2f0"></stop>
            <stop offset={0.974} stopColor="#3bd5ff"></stop>
          </radialGradient>
          <linearGradient
            id="fluentColorGlobe201"
            x1={5.556}
            x2={17.111}
            y1={4.667}
            y2={15.333}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0079a8"></stop>
            <stop offset={1} stopColor="#2052cb"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}
