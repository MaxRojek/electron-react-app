import React, { useState } from "react";
import { NavbarWrapper, NavButton, NavLink } from "./NavBarStyle";
const NavBar = () => {
  return (
    <NavbarWrapper>
      <NavButton>
        <NavLink to="/">
          <div>HomePage</div>
        </NavLink>
      </NavButton>
      <NavButton>
        <NavLink to="/drawing">
          <div>Drawing</div>
        </NavLink>
      </NavButton>
      <NavButton>
        <NavLink to="/drawing">
          <div>Color change</div>
        </NavLink>
      </NavButton>
      <NavButton>
        <NavLink to="/drawing">
          <div>Image</div>
        </NavLink>
      </NavButton>
    </NavbarWrapper>
  );
};

export default NavBar;
