import React from "react";
import PropTypes from "prop-types";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const styles = theme => ({
  progress: {
    color: "#5f3081"
  }, 
  white:{
    color: "#ffffff"
  },
});

const Loading = props => (
  <React.Fragment>
    <CircularProgress size={props.size ? props.size : 100} className={props.white ? props.classes.white : props.classes.progress} />
  </React.Fragment>
);

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.number,
  white: PropTypes.bool
};

export default withStyles(styles)(Loading);
