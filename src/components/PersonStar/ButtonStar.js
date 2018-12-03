import React from "react";
import PropTypes from "prop-types";
// GraphQL
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
// MaterialUI
import { withRouter } from "react-router";
import { Button } from "@material-ui/core";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";

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
      {(addStar, { data }) => (
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
          Star
        </Button>
      )}
    </Mutation>
  </React.Fragment>
);

ButtonStar.propTypes = {
  classes: PropTypes.object.isRequired,
  idClientMutation: PropTypes.string.isRequired,
  idStarrable: PropTypes.string.isRequired
};

export default withRouter(withStyles(styles)(ButtonStar));
