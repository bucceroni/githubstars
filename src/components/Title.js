import React from "react";
import PropTypes from "prop-types";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";

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

const Title = props => (
  <React.Fragment>
    <div>
      <span className={props.classes.title}>
        Github
        <span className={props.classes.titleColor}>Stars</span>
      </span>
    </div>
  </React.Fragment>
);

Title.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Title);
