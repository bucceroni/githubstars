import React, { Component } from "react";
import PropTypes from "prop-types";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import { Paper, List, ListItem, Grid } from "@material-ui/core";
import StarBorder from "@material-ui/icons/StarBorder";
// Components
import ButtonStar from "./ButtonStar";
import NotFoundDiff from "../NotFoundDiff";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 900
  },
  list: {
    position: "relative",
    overflow: "auto",
    height: 550
  },
  nameWithOwner: {
    fontFamily: "Roboto",
    fontSize: "24px",
    fontWeight: 400
  },
  description: {
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: 100
  },
  icon: {
    color: "#5f3081",
    marginRight: 5
  }
});

class PersonStar extends Component {
  render() {
    const { classes, data } = this.props;

    let diff = data.user.starredRepositories.nodes.filter(
      user =>
        !data.viewer.starredRepositories.nodes
          .map(viewer => viewer.id)
          .includes(user.id)
    );


    return (
      <React.Fragment>
        <Paper className={classes.root} elevation={3}>
          <List className={classes.list}>
            {diff.length > 0 ? (
              diff.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <Paper className={classes.root} elevation={3}>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                        wrap="nowrap"
                      >
                        <div>
                          <span className={classes.nameWithOwner} key={index}>
                            {item.nameWithOwner}
                          </span>
                        </div>
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        wrap="nowrap"
                      >
                        <Grid item xs={10}>
                          <div>
                            <span className={classes.description} key={index}>
                              {item.description}
                            </span>
                          </div>
                        </Grid>
                        <Grid item>
                          <ButtonStar
                            idClientMutation={data.viewer.id}
                            idStarrable={item.id}
                          />
                        </Grid>
                      </Grid>

                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        wrap="nowrap"
                      >
                        <Grid item>
                          <StarBorder className={classes.icon} />
                        </Grid>
                        <Grid item>
                          <div>
                            <span className={classes.description} key={index}>
                              {item.stargazers.totalCount}
                            </span>
                          </div>
                        </Grid>
                      </Grid>
                    </Paper>
                  </ListItem>
                );
              })
            ) : (
              <NotFoundDiff />
            )}
          </List>
        </Paper>
      </React.Fragment>
    );
  }
}

PersonStar.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object
};

export default withStyles(styles)(PersonStar);
