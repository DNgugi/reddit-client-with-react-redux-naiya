import React from "react";
import {
  fade,
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "block",
  },
  search: {
    position: "relative",
    backgroundColor: fade(theme.palette.common.white, 0.5),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.15),
    },
    marginLeft: 10,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

// const handleChange = (e) => {
//   e.preventDefault();
//   console.log(e.target.value);
// };

const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <div>
            <Typography variant="h5">Reddit Client</Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              inputComponent="input"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => {
                console.log(event.target.value);
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
