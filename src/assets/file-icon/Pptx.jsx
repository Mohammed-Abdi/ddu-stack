import { useId } from "react";

export default function Pptx(props) {
  const id = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none">
        <path
          fill={`url(#${id}-fluentColorDocumentText480)`}
          d="M11 43h26a3 3 0 0 0 3-3V18l-10-4l-4-10H11a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3"
        ></path>
        <path
          fill={`url(#${id}-fluentColorDocumentText483)`}
          fillOpacity={0.5}
          d="M11 43h26a3 3 0 0 0 3-3V18l-10-4l-4-10H11a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3"
        ></path>
        <path
          fill={`url(#${id}-fluentColorDocumentText481)`}
          d="M26 15V4l14 14H29a3 3 0 0 1-3-3"
        ></path>
        <path
          fill={`url(#${id}-fluentColorDocumentText482)`}
          fillOpacity={0.9}
          d="M16.25 23a1.25 1.25 0 1 0 0 2.5h15.5a1.25 1.25 0 1 0 0-2.5zM15 30.25c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5h-15.5c-.69 0-1.25-.56-1.25-1.25M16.25 35a1.25 1.25 0 1 0 0 2.5h15.5a1.25 1.25 0 1 0 0-2.5z"
        ></path>
        <defs>
          <linearGradient
            id={`${id}-fluentColorDocumentText480`}
            x1={30.4}
            x2={33.484}
            y1={4}
            y2={36.911}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F26816"></stop>
            <stop offset={1} stopColor="#E25800"></stop>
          </linearGradient>
          <linearGradient
            id={`${id}-fluentColorDocumentText481`}
            x1={32.977}
            x2={29.477}
            y1={9.833}
            y2={15.667}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBB76B"></stop>
            <stop offset={1} stopColor="#FFD7A3"></stop>
          </linearGradient>
          <linearGradient
            id={`${id}-fluentColorDocumentText482`}
            x1={33}
            x2={17.47}
            y1={43.3}
            y2={15.805}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F88A3E"></stop>
            <stop offset={1} stopColor="#ffffff"></stop>
          </linearGradient>
          <radialGradient
            id={`${id}-fluentColorDocumentText483`}
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(-17.33333 17.73237 -10.47911 -10.24329 41.333 5.219)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.362} stopColor="#B74700"></stop>
            <stop offset={1} stopColor="#B74700" stopOpacity={0}></stop>
          </radialGradient>
        </defs>
      </g>
    </svg>
  );
}
