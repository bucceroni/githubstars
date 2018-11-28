import React, { Component } from "react";
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
      </React.Fragment>
    );
  }
}

export default SearchPage;
