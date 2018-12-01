import React, { Component } from "react";
import PropTypes from "prop-types";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
// Components
import IconInfo from "./IconInfo";
import BioInfo from "./BioInfo";
import PersonInfo from "./PersonInfo";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 300,
    backgroundColor: "#5f3081"
  }
});

class PersonCard extends Component {
  render() {
    const { classes, data } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.root} elevation={3}>
          <PersonInfo data={data} />
          <hr style={{ color: "#ffffff", margin: "20px" }} />
          <BioInfo info={data.user.bio} />
          <IconInfo icon={"company"} info={data.user.company} />
          <IconInfo icon={"location"} info={data.user.location} />
          <IconInfo icon={"email"} info={data.user.email} />
          <IconInfo icon={"url"} info={data.user.url} />
        </Paper>
      </React.Fragment>
    );
  }
}

PersonCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object
};

export default withStyles(styles)(PersonCard);
