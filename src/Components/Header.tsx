import React, { ReactFragment, ReactText, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IProps{}

interface IState{
  mobileMenu: boolean
}

const Header = (props: IProps) =>  {

  const [mobileMenu, setMobileMenu] = useState(false)

    return (
      <div className="header">
        TYPESCRIPT TEMPLATE
      </div>
    );
  }


export default Header;