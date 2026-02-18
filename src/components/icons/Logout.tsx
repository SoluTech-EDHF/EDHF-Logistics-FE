const Logout = ({
  size = 17,
  className,
}: {
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.5 21H10.5C10.8978 21 11.2794 20.842 11.5607 20.5607C11.842 20.2794 12 19.8978 12 19.5V17.25H10.5V19.5H1.5V1.5H10.5V3.75H12V1.5C12 1.10218 11.842 0.720644 11.5607 0.43934C11.2794 0.158035 10.8978 0 10.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V19.5C0 19.8978 0.158035 20.2794 0.43934 20.5607C0.720644 20.842 1.10218 21 1.5 21Z"
        fill="currentColor"
      />
      <path
        d="M12.4395 13.9395L15.129 11.25H4.5V9.75H15.129L12.4395 7.0605L13.5 6L18 10.5L13.5 15L12.4395 13.9395Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logout;
