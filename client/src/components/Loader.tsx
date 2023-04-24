const Loader = ({
  size = "medium",
  variant = "component",
}: {
  size: "small" | "medium";
  variant?: "component";
}) => {
  return (
    <div className={`loader loader_${variant}`}>
      <div className={`spiner-${size}`} />
    </div>
  );
};

export { Loader };
