import { NavLink } from "react-router-dom";

import type { TNavigation } from "./interface/interface";

export default function NavigationLink({ nav }: { nav: TNavigation }) {
  return (
    <NavLink
      to={nav.link}
      className={({ isActive }) =>
        isActive
          ? "p-2 bg-gray-400 text-white rounded-lg"
          : "p-2 hover:bg-gray-400 hover:text-white transition-colors duration-200 ease-in rounded-lg"
      }
    >
      {nav.title}
    </NavLink>
  );
}
