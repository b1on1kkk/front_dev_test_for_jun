import { Outlet } from "react-router-dom";

import { NAVIGATION } from "./components/NavigationLink/constants/constants";

import NavigationLink from "./components/NavigationLink/NavigationLink";

function App() {
  return (
    <main className="flex flex-col h-screen">
      <nav className="h-[80px] bg-gray-300 flex items-center justify-center gap-3">
        {NAVIGATION.map((nav) => {
          return <NavigationLink nav={nav} key={nav.id} />;
        })}
      </nav>

      <Outlet></Outlet>
    </main>
  );
}

export default App;
