import { generateClassName } from "../helpers/generateClassName";

// type Props = {}
// {}: Props
function Header() {
  const ClassName = generateClassName("header");

  return <header className={ClassName}>Header</header>;
}

export default Header;
