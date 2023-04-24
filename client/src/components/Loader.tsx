import Logo from "./Logo";

const Loader = ({
  size = "medium",
  variant = "component",
}: {
  size: "small" | "medium";
  variant?: "component";
}) => {
  return (
    <div className={`loader loader_${variant}`}>
      <Logo size={size} loader />
    </div>
  );
};

export { Loader };
