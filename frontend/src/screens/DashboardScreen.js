import React from "react";
import { Button ,Nav} from "react-bootstrap";
import { LinkContainer  } from "react-router-bootstrap";
import SubHeader from "../components/SubHeader";

const DashboardScreen = () => {
  const dataToRender = {
    title: "Infoboards",
    component:
      <Button
      variant="success"
        onClick={() => {
          console.log("clicked");
        }}
      >Create New </Button>
    ,navLinks: ''
  
  };
  return (
    <>
      <SubHeader data={dataToRender} />
      <h1>Dashboard</h1>
    </>
  );
};

export default DashboardScreen;
