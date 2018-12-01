import React from "react";
// MaterialUI
import { withRouter } from "react-router";
import { Button } from "@material-ui/core";

const BtnSearch = props => (
  <React.Fragment>
    <Button
      onClick={() => {
        props.history.push(`/search`);
      }}
    >
      Search Github user 
    </Button>
  </React.Fragment>
);

export default withRouter(BtnSearch);
