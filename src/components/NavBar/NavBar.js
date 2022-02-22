import React from "react";
import { Link, Nav } from "./styles";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";

const SIZE_ICONS = "32px";

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size={SIZE_ICONS} />
      </Link>
      <Link to="/favs">
        <MdFavoriteBorder size={SIZE_ICONS} />
      </Link>
      <Link to="/user">
        <MdPersonOutline size={SIZE_ICONS} />
      </Link>
    </Nav>
  );
};

export default NavBar;
