import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

class ResultPage extends Component {
  render() {
    const {
      match: {
        params: { search }
      }
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
            if (loading) return <p>Loading...</p>;
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

export default ResultPage;
