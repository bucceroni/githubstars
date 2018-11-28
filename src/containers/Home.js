import React, { Component } from "react";
// React Router
import { Redirect } from "react-router-dom";
// MaterialUI
import IconButton from "@material-ui/core/IconButton";
// Images
import LoginGitHub from "../images/login-git.png";

class Home extends Component {
  state = {
    token: `${localStorage.getItem("token")}`,
    status: "initial"
  };

  logout = () => {
    this.setState({ token: undefined });
    localStorage.removeItem("token");
  };

  componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];

    if (code) {
      this.setState({ status: "loading" });
      fetch(`https://gatekeeper-githubstars.herokuapp.com/authenticate/${code}`)
        .then(response => response.json())
        .then(({ token }) => {
          localStorage.setItem("token", token);
          this.setState({
            token,
            status: "finished"
          });
        });
    }
  }

  render() {
    const { token, status } = this.state;
    console.log(token);
    console.log(status);

    return (
      <div>
        teste
        {status === "initial" && (
          <IconButton
            href={`https://github.com/login/oauth/authorize?client_id=${
              process.env.REACT_APP_CLIENT_ID
            }&scope=user&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}
            aria-label="Login"
          >
            <img src={LoginGitHub} alt={"Login"} />
          </IconButton>
        )}
        {status === "loading" && <div>Loading</div>}
        {status === "finished" ? (
          <Redirect
            to={{
              pathname: "/search"
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default Home;
