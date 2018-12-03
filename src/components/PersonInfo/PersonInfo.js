import React, { Component } from "react";
import PropTypes from "prop-types";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Avatar } from "@material-ui/core";
// Components
import IconInfo from "./IconInfo";
import BioInfo from "./BioInfo";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 300,
    backgroundColor: "#5f3081"
  },
  avatar: {
    margin: 10,
    width: 200,
    height: 200
  },
  name: {
    fontFamily: "Roboto",
    fontSize: "24px",
    color: "#ffffff",
    fontWeight: 600
  },
  nickname: {
    fontFamily: "Roboto",
    fontSize: "18px",
    color: "#ffffff",
    fontWeight: 400
  }
});

class PersonCard extends Component {
  render() {
    const { classes, data } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.root} elevation={3}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid item xs>
              <Avatar
                alt="AvatarUrl"
                src={data.user.avatarUrl}
                className={classes.avatar}
              />
            </Grid>

            <Grid item xs>
              <div className={classes.name}>
                <span>{data.user.name}</span>
              </div>
            </Grid>

            <Grid item xs>
              <div className={classes.nickname}>
                <span>{data.user.login}</span>
              </div>
            </Grid>
          </Grid>
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
