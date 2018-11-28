import React from "react";
import PropTypes from "prop-types";
// MaterialUI
import { withStyles } from "@material-ui/core/styles";
import { TextField, Paper, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "70%"
  }
});

const Search = props => (
  <React.Fragment>
    <Paper className={props.classes.root} elevation={3}>
      <TextField
        fullWidth
        placeholder="Github username ..."
        margin="dense"
        InputProps={{
          endAdornment: (
            <IconButton
              disabled={props.search === "" ? true : false}
              onClick={props.onSearch}
            >
              <SearchIcon />
            </IconButton>
          ),
          disableUnderline: true
        }}
        onChange={props.onChange}
      />
    </Paper>
  </React.Fragment>
);

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  search: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};

export default withStyles(styles)(Search);
