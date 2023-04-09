import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map((l) => <a href={`#${l}`} key={l}>{l}</a>)};
    </nav>;
}

export default NavBar;
