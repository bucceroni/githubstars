import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// GraphQL
import { Query } from "react-apollo";
import gql from "graphql-tag";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import Loading from "../components/Loading";

const styles = theme => ({
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
      <Fragment>
        <Query
          query={gql`
            {
                user(login: ${search}) {
                    name
                    login
                    email
                    location
                    avatarUrl
                    repositories(first: 50) {
                      nodes {
                        name
                      }
                    }
                    starredRepositories(first: 50) {
                      nodes {
                        name
                      }
                    }
                  }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading)
              return (
               <Loading/>
              );
            if (error) return <p>Error :(</p>;

            return (
              <div>
                <p>{`Nome: ${data.user.name}`}</p>
                <p>{`Login: ${data.user.login}`}</p>
                <p>{`Email: ${data.user.email}`}</p>
                <p>{`Localização: ${data.user.location}`}</p>
                <p>{`Avatar: ${data.user.avatarUrl}`}</p>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

ResultPage.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ResultPage);
