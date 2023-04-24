import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { StoreContext } from "..";
import { Loader } from "../components/Loader";
import { observer } from "mobx-react-lite";

// type Props = {}
// {}: Props
function Layout() {
  const { main } = useContext(StoreContext);

  return (
    <div className="layout">
      <Header />
      <Navigation />
      {/* <NavigationMobile />  */}
      <main className="layout__outlet">
        {main.settings ? <Outlet /> : <Loader size="medium" />}
      </main>
    </div>
  );
}

export default observer(Layout);
