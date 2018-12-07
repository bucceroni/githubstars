import React from "react";
import PropTypes from "prop-types";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// Components
import BtnSearch from "./BtnSearch";
import BtnLogout from "./BtnLogout";

const styles = theme => ({
  title: {
    fontFamily: "Raleway",
    fontSize: "48px",
    fontWeight: 100
  }
});

const NotFoundDiff = props => (
  <React.Fragment>
    <div>
      <span className={props.classes.title}>
        User doesn't have any stars other than your account
      </span>
    </div>
  </React.Fragment>
);

NotFoundDiff.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFoundDiff);
