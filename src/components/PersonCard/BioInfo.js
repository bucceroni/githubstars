import React, { Component } from "react";
import PropTypes from "prop-types";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  text: {
    fontFamily: "Roboto",
    fontSize: "14px",
    color: "#ffffff",
    fontWeight: 400,
    padding: "0px 0px 20px 0px"
  }
});

class BioInfo extends Component {
  render() {
    const { classes, info } = this.props;
    return (
      <React.Fragment>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          wrap="nowrap"
        >
          <div className={classes.text}> {info && <span>{info}</span>}</div>
        </Grid>
      </React.Fragment>
    );
  }
}

BioInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  info: PropTypes.string
};

export default withStyles(styles)(BioInfo);
