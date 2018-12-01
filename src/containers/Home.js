import React, { Component } from "react";
// React Router
import { Redirect } from "react-router-dom";
// Components
import Loading from "../components/Loading";
import Login from "../components/Login";

class Home extends Component {
  state = {
    status: "initial"
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
            status: "initial"
          });
        });
    }
  }

  render() {
    const { status } = this.state;

    return (
      <React.Fragment>
        {!localStorage.getItem("token") && status !== "loading" && <Login />}

        {status === "loading" && <Loading />}

        {localStorage.getItem("token") && (
          <Redirect
            to={{
              pathname: "/search"
            }}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Home;
