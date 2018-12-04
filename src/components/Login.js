import React from "react";
import PropTypes from "prop-types";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import { IconButton, Tooltip } from "@material-ui/core";
// Images
import LoginGitHub from "../images/login-git.png";

const styles = theme => ({
  tooltip: {
    fontFamily: "Raleway",
    fontSize: "12px",
    color: "#ffffff",
    fontWeight: 600
  },
  logo: {
    height: "300px",
    width: "300px"
  },
  info: {
    fontFamily: "Raleway",
    fontSize: "48px",
    fontWeight: 100
  }
});

const Login = props => (
  <React.Fragment>
    <Tooltip
      title={<span className={props.classes.tooltip}>Login</span>}
      placement="top"
    >
      <IconButton
        href={`https://github.com/login/oauth/authorize?client_id=${
          process.env.REACT_APP_CLIENT_ID
        }&scope=user%public_repo%gist&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}
      >
        <img className={props.classes.logo} src={LoginGitHub} alt={"Login"} />
      </IconButton>
    </Tooltip>

    <div>
      <span className={props.classes.info}>
        Search users, view and star github repositories
      </span>
    </div>
  </React.Fragment>
);

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
