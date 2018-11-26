import React, { Component } from "react";
//MaterialUI
import { Grid } from "@material-ui/core";
// Components
import Title from "../components/Title";
import Search from "../components/Search";

class SearchPage extends Component {
  state = {
    search: ""
  };

  handleChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div style={{ paddingTop: "300px" }}>
        <Grid container direction="row" alignItems="center" justify="center">
          <Title />
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item xs={8}>
            <Search
              onChange={this.handleChange}
              search={search}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SearchPage;
