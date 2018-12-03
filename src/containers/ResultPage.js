import React, { Component } from "react";
// GraphQL
import { Query } from "react-apollo";
import gql from "graphql-tag";
// MaterialUI
import { Grid } from "@material-ui/core";
// Components
import Loading from "../components/Loading";
import PersonInfo from "../components/PersonInfo/PersonInfo";
import PersonStar from "../components/PersonStar/PersonStar";
import BtnLogout from "../components/BtnLogout";
import BtnSearch from "../components/BtnSearch";
import NotFound from "../components/NotFound";

class ResultPage extends Component {
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push(`/`);
    }
  }

  render() {
    const {
      match: {
        params: { search }
      }
    } = this.props;

    return (
      <React.Fragment>
        <Query
          query={gql`
            {
              viewer {
                id
                avatarUrl
                name
                login
                bio
                company
                location
                email
                url
                starredRepositories(first: 15) {
                  nodes {
                    nameWithOwner
                    description
                    stargazers{
                      totalCount
                    }
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
                starredRepositories(first: 15) {
                  nodes {
                    id
                    nameWithOwner
                    description
                    stargazers{
                      totalCount
                    }
                  }
                }
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <NotFound />;

            return (
              <React.Fragment>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  wrap="nowrap"
                >
                  <Grid item>
                    <PersonInfo data={data} />
                  </Grid>

                  <Grid item>
                    <PersonStar data={data} />
                  </Grid>
                </Grid>
                <br />
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  wrap="nowrap"
                >
                  <BtnLogout />
                  <BtnSearch />
                </Grid>
              </React.Fragment>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default ResultPage;
