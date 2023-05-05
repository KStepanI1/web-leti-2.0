import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { StoreContext } from "..";
import { Loader } from "../components/Loader";
import { observer } from "mobx-react-lite";
import Calendar from "../components/Calendar";
import { generateClassName } from "../helpers/generateClassName";

// type Props = {}
// {}: Props

const MAIN_CLASSNAME = "layout";

function Layout() {
  const { main } = useContext(StoreContext);

  const ClassName = generateClassName(MAIN_CLASSNAME);
  const RightBoxClassName = generateClassName(MAIN_CLASSNAME + "__right-box");
  const OutletClassName = generateClassName(MAIN_CLASSNAME + "__outlet");
  const ContentContainer = generateClassName(
    MAIN_CLASSNAME + "__content-container"
  );

  return (
    <div className={ClassName}>
      <Header />

      {/* <NavigationMobile />  */}
      <div className={ContentContainer}>
        <Navigation />
        <main className={OutletClassName}>
          {main.settings ? <Outlet /> : <Loader size="medium" />}
          <div className={RightBoxClassName}>
            <Calendar />
          </div>
        </main>
      </div>
    </div>
  );
}

export default observer(Layout);
