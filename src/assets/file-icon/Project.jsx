export default function Project(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 256 256"
      {...props}
    >
      <defs>
        <linearGradient
          id="logosSlidev0"
          x1="0%"
          x2="100%"
          y1="-8.889%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#3acbd4"></stop>
          <stop offset="100%" stopColor="#2988b1"></stop>
        </linearGradient>
        <linearGradient
          id="logosSlidev1"
          x1="-10.556%"
          x2="84.536%"
          y1="-12.222%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#95f0cf"></stop>
          <stop offset="100%" stopColor="#3ab9d5"></stop>
        </linearGradient>
        <linearGradient
          id="logosSlidev2"
          x1="-.132%"
          x2="12.361%"
          y1="-8.073%"
          y2="104.495%"
        >
          <stop offset="0%" stopColor="#ffeb83"></stop>
          <stop offset=".01%" stopColor="#ffeb83"></stop>
          <stop offset="8.333%" stopColor="#ffdd35"></stop>
          <stop offset="60.177%" stopColor="#ffbb13"></stop>
          <stop offset="100%" stopColor="#ffa800"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#logosSlidev0)"
        d="M71.385 34.462h147.692c20.392 0 36.923 16.53 36.923 36.923v147.692C256 239.469 239.469 256 219.077 256H71.385c-20.392 0-36.923-16.531-36.923-36.923V71.385c0-20.392 16.53-36.923 36.923-36.923"
      ></path>
      <path
        fill="url(#logosSlidev1)"
        d="M110.77 0c61.175 0 110.768 49.593 110.768 110.77c0 61.175-49.593 110.768-110.769 110.768S0 171.945 0 110.77S49.593 0 110.77 0"
      ></path>
      <path
        fill="url(#logosSlidev2)"
        d="M138.159 157.354c-2.897-10.812-4.346-16.218-2.912-19.951a12.3 12.3 0 0 1 7.079-7.08c3.733-1.433 9.14.016 19.95 2.913l53.74 14.399c10.811 2.897 16.217 4.345 18.734 7.453a12.3 12.3 0 0 1 2.59 9.671c-.625 3.95-4.582 7.907-12.497 15.822l-39.34 39.34c-7.914 7.914-11.871 11.871-15.821 12.497a12.3 12.3 0 0 1-9.67-2.592c-3.109-2.516-4.557-7.922-7.454-18.734z"
      ></path>
    </svg>
  );
}
