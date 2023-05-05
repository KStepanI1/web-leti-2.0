import Logo from "./Logo";

const Loader = ({
  size = "medium",
  variant = "component",
  logo = false,
}: {
  size: "small" | "medium";
  logo?: boolean;
  variant?: "component";
}) => {
  return (
    <div className={`loader loader_${variant}`}>
      {logo ? <Logo size={size} loader /> :  <div className={`spiner-${size}`} />}
    </div>
  );
};

export { Loader };
