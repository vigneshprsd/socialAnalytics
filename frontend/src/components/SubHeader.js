import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const SubHeader = (props) => {
  return (
    <div className="subHeader w-100 p-3 px-5">
      <Navbar.Brand>
        <span className="h3 text-light uppercase">{props.data.title}</span>
      </Navbar.Brand>
      <div>{props.data.navLinks}</div>
      <Nav className="ml-auto">{props.data.component}</Nav>
    </div>
  );
};

export default SubHeader;
