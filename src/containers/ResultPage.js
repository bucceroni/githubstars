import React, { Component } from "react";
import PropTypes from "prop-types";
// GraphQL
import { Query } from "react-apollo";
import gql from "graphql-tag";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import Loading from "../components/Loading";
// Components
import PersonCard from "../components/PersonCard/PersonCard";
import BtnLogout from "../components/BtnLogout";
import BtnSearch from "../components/BtnSearch";

const styles = theme => ({
  root: {}
});

class ResultPage extends Component {
  render() {
    const {
      match: {
        params: { search }
      },
      classes
    } = this.props;
    return (
      <React.Fragment>
        <Query
          query={gql`
            {
              viewer {
                avatarUrl
                name
                login
                bio
                company
                location
                email
                url
                starredRepositories(first: 5) {
                  nodes {
                    name
                  }
                }
              }
              user(login: ${search}) {
                avatarUrl
                name
                login
                bio
                company
                location
                email
                url
                starredRepositories(first: 5) {
                  nodes {
                    name
                  }
                }
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <p>Error :(</p>;

            return (
              <React.Fragment>
                <PersonCard data={data} />
                <BtnLogout/>
                <BtnSearch/>

                {/* {data.user.starredRepositories.nodes.map((value, index) => {
                  return <p key={index}>{`star: ${value.name}`}</p>;
                })} */}
              </React.Fragment>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

ResultPage.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ResultPage);
