import React, { Component } from "react";
import PropTypes from "prop-types";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import { Grid, Avatar } from "@material-ui/core";

const styles = theme => ({
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

class PersonInfo extends Component {
  render() {
    const { classes, data } = this.props;
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

PersonInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object
};

export default withStyles(styles)(PersonInfo);
