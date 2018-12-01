import React, { Component } from "react";
import PropTypes from "prop-types";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import LocationOn from "@material-ui/icons/LocationOn";
import Group from "@material-ui/icons/Group";
import Email from "@material-ui/icons/Email";
import Public from "@material-ui/icons/Public";

const styles = theme => ({
  bio: {
    fontFamily: "Roboto",
    fontSize: "18px",
    color: "#ffffff",
    fontWeight: 400
  },
  text: {
    fontFamily: "Roboto",
    fontSize: "12px",
    color: "#ffffff",
    fontWeight: 600
  },
  icon: {
    color: "#ffffff",
    marginRight: 5
  }
});

class IconInfo extends Component {
  render() {
    const { classes, info, icon } = this.props;

    const icons = {
      company: <Group className={classes.icon} />,
      location: <LocationOn className={classes.icon} />,
      email: <Email className={classes.icon} />,
      url: <Public className={classes.icon} />
    };

    return (
      <React.Fragment>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid item xs={2}>
            {icons[icon]}
          </Grid>
          <Grid item xs>
            <div className={classes.text}>
              <span>{info}</span>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

IconInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  info: PropTypes.string,
  icon: PropTypes.string
};

export default withStyles(styles)(IconInfo);
