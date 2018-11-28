import React from "react";
import PropTypes from "prop-types";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.unit * 2,
    height: "80vh"
  }
});

class Template extends React.Component {
  render() {
    const { classes, children } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>{children}</div>
      </React.Fragment>
    );
  }
}

Template.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};

export default withStyles(styles)(Template);
