type IconName = "meme" | "tech" | "workflow" | "spark" | "bolt" | "check";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  } as const;

  if (name === "meme") {
    return (
      <svg {...common}>
        <path
          d="M7.5 4.5h9A3 3 0 0 1 19.5 7.5v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 10.25a1 1 0 1 0 0 .01M15 10.25a1 1 0 1 0 0 .01"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M8.25 14.5c1.1 1.2 2.45 1.8 3.75 1.8s2.65-.6 3.75-1.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "tech") {
    return (
      <svg {...common}>
        <path
          d="M8 6.5h8A3.5 3.5 0 0 1 19.5 10v4A3.5 3.5 0 0 1 16 17.5H8A3.5 3.5 0 0 1 4.5 14v-4A3.5 3.5 0 0 1 8 6.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 9.5h6M9 12h4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 17.5v2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "workflow") {
    return (
      <svg {...common}>
        <path
          d="M7 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M17 11.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9.3 11.2 14.7 13"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg {...common}>
        <path
          d="M12 2l1.2 5.1L18 9l-4.8 1.9L12 16l-1.2-5.1L6 9l4.8-1.9L12 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "bolt") {
    return (
      <svg {...common}>
        <path
          d="M13 2 5.5 13H12l-1 9 7.5-11H12l1-9Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
