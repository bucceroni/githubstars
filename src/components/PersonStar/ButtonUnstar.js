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
import ButtonStar from "./ButtonStar";
// MaterialUI

const styles = theme => ({
  cssRoot: {
    color: "#ffffff",
    backgroundColor: "#5f3081",
    "&:hover": {
      color: "#5f3081",
      borderColor: "#5f3081"
    }
  }
});

const ButtonUnstar = props => (
  <React.Fragment>
    <Mutation
      mutation={gql`
        mutation RemoveStarViewer(
          $clientMutationId: String!
          $starrableId: ID!
        ) {
          removeStar(
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
      {(removeStar, { loading, error, data }) => {
        if (error) return <span>{error.message}</span>;
        if (data)
          return (
            <ButtonStar
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
                removeStar({
                  variables: {
                    clientMutationId: props.idClientMutation,
                    starrableId: props.idStarrable
                  }
                });
              }}
            >
              {loading ? <Loading size={20} /> : "Unstar"}
            </Button>
          </div>
        );
      }}
    </Mutation>
  </React.Fragment>
);

ButtonUnstar.propTypes = {
  classes: PropTypes.object.isRequired,
  idClientMutation: PropTypes.string.isRequired,
  idStarrable: PropTypes.string.isRequired
};

export default withStyles(styles)(ButtonUnstar);
