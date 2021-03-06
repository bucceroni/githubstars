import React from "react";
import PropTypes from "prop-types";
// GraphQL
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
// Components
import Loading from "../Loading";
import ButtonUnstar from "./ButtonUnstar";
// MaterialUI

const styles = theme => ({
  cssRoot: {
    color: "#5f3081",
    borderColor: "#5f3081",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#5f3081"
    }
  }
});

const ButtonStar = props => (
  <React.Fragment>
    <Mutation
      mutation={gql`
        mutation AddStarViewer($clientMutationId: String!, $starrableId: ID!) {
          addStar(
            input: {
              clientMutationId: $clientMutationId
              starrableId: $starrableId
            }
          ) {
            clientMutationId
          }
        }
      `}
    >
      {(addStar, { loading, error, data }) => {
        if (error) return <span>{error.message}</span>;
        if (data)
          return (
            <ButtonUnstar
              idClientMutation={props.idClientMutation}
              idStarrable={props.idStarrable}
            />
          );

        return (
          <div>
            <Button
              variant="outlined"
              className={props.classes.cssRoot}
              onClick={() => {
                addStar({
                  variables: {
                    clientMutationId: props.idClientMutation,
                    starrableId: props.idStarrable
                  }
                });
              }}
            >
              {loading ? <Loading size={20} white={true} /> : "Star"}
            </Button>
          </div>
        );
      }}
    </Mutation>
  </React.Fragment>
);

ButtonStar.propTypes = {
  classes: PropTypes.object.isRequired,
  idClientMutation: PropTypes.string.isRequired,
  idStarrable: PropTypes.string.isRequired
};

export default withStyles(styles)(ButtonStar);
