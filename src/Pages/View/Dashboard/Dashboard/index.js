import { Button } from "@mui/material";
import React from "react";

const Dashboard = (props) => {
  console.log("propshomeee", props);
  return (
    <div>
      <h1>This is dashboard page </h1>
      <h1>This is dashboard page </h1>
      <h1>This is dashboard page </h1>
      <h1>This is dashboard page </h1>
      <h1>This is dashboard page </h1>
      <h1>This is dashboard page </h1>
      <Button
        onClick={() => {
          props?.addtocartHandler({
            price: 5000,
            name: "Dashboard",
          });
        }}
        variant="contained"
        color="primary"
      >
        Add To Cart
      </Button>
      <Button
        onClick={() => {
          props?.removetocartHandler();
        }}
        variant="contained"
        color="primary"
      >
        RemoveTo Cart
      </Button>
      number Of Items : {props.data.length}
    </div>
  );
};

export default Dashboard;
