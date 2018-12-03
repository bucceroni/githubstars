import React, { Component } from "react";
// MaterialUI
import { Grid } from "@material-ui/core";
// Components
import Title from "../components/Title";
import Search from "../components/Search";
import BtnLogout from "../components/BtnLogout"

class SearchPage extends Component {
  state = {
    search: ""
  };

  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push(`/`);
    }
  }

  handleChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleSearch = () => {
    const { search } = this.state;
    this.props.history.push(`/result/${search}`);
  };

  render() {
    const { search } = this.state;
    return (
      <React.Fragment>
        <Title />
        <Search
          search={search}
          onSearch={this.handleSearch}
          onChange={this.handleChange}
        />
        <br />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          wrap="nowrap"
        >
          <BtnLogout />
        </Grid>
      </React.Fragment>
    );
  }
}

export default SearchPage;
