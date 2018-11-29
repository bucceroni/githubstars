import React from "react";
import PropTypes from "prop-types";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const styles = theme => ({
  progress: {
    color: "#5f3081"
  }
});

const Loading = props => (
  <React.Fragment>
    <CircularProgress size={100} className={props.classes.progress} />
  </React.Fragment>
);

Loading.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Loading);
