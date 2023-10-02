import React from "react";
import { Link } from "react-scroll";

const HeaderItem = ({ goTo, text, itemClass, isOpen }) => {
  const closeNavbar = (isOpen) => {
    if(isOpen) {
      document.getElementById("menu_checkbox").checked = false;
    }
  }
  return (
    <li>
      <Link
        className={itemClass}
        duration={500}
        offset={20}
        smooth={true}
        spy={true}
        to={goTo}
        onClick={() => {
          closeNavbar(isOpen);
        }}
      >
        {text}
      </Link>
    </li>
  );
};

HeaderItem.defaultProps = {
  isOpen: () => {},
};

export default HeaderItem;
