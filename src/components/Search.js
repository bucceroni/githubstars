import React from "react";
import PropTypes from "prop-types";
//React Router
import { Link } from "react-router-dom";
//MaterialUI
import { withStyles } from "@material-ui/core/styles";
import { TextField, Paper, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const Search = props => (
  <Paper className={props.classes.root} elevation={3}>
    <TextField
      fullWidth
      placeholder="Github username ..."
      margin="dense"
      InputProps={{
        endAdornment: (
          <Link to={`/result/${props.search}`}>
            <IconButton disabled={props.search === "" ? true : false}>
              <SearchIcon onClick={props.onSearch} />
            </IconButton>
          </Link>
        ),
        disableUnderline: true
      }}
      onChange={props.onChange}
    />
  </Paper>
);

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  search: PropTypes.string,
  onChange: PropTypes.func
};

export default withStyles(styles)(Search);
