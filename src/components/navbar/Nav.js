import React, { useState } from "react";

import NavLinks from "./NavLinks";
import Burger from "./Burger";

import "./Nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <nav style={{ zIndex: 9 }}>
      <div id="logo">Cynthia Clarissa</div>
      <Burger open={open} toggle={toggle} />
      <NavLinks open={open} toggle={toggle} />
    </nav>
  );
};

export default Nav;
