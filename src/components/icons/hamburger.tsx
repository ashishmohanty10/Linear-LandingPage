export const Hamburger = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hamburger-icon"
      className={className}
    >
      <rect
        x="1"
        y="4"
        width="14"
        height="1"
        rx="0.5"
        style={{
          transformOrigin: "center",
          transition: "160ms var(--ease-out-quad)",
          transform: "translateY(-3.5px)",
        }}
      ></rect>
      <rect
        x="1"
        y="7.5"
        width="14"
        height="1"
        rx="0.5"
        style={{
          transformOrigin: "center",
          transition: "160ms var(--ease-out-quad)",
          transform: "translateY(3.5px)",
        }}
      ></rect>
    </svg>
  );
};
