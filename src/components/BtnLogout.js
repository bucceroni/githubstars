import React from "react";
// MaterialUI
import { withRouter } from "react-router";
import { Button } from "@material-ui/core";

const BtnLogout = props => (
  <React.Fragment>
    <Button
      color="secondary"
      onClick={() => {
        localStorage.removeItem("token");
        props.history.push(`/`);
      }}
    >
      Logout
    </Button>
  </React.Fragment>
);

export default withRouter(BtnLogout);
