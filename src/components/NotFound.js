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
  },
  titleColor: {
    color: "#5f3081",
    fontWeight: 400
  }
});

const NotFound = props => (
  <React.Fragment>
    <div>
      <span className={props.classes.title}>
        User
        <span className={props.classes.titleColor}> not found</span>
      </span>
    </div>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      wrap="nowrap"
    >
      <BtnLogout />
      <BtnSearch />
    </Grid>
  </React.Fragment>
);

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
