import React from "react";

import { useLocation } from "react-router-dom";
import { NavList, LinkStyled } from "./Nav.styled";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/anu", text: "anu" },
];
const Navs = () => {
  const location = useLocation();
  console.log("location", location);
  return (
    <div>
      <NavList>
        {LINKS.map((items) => (
          <li key={items.to}>
            <LinkStyled
              to={items.to}
              className={items.to === location.pathname ? "active" : " "}
            >
              {items.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navs;
