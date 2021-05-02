// import logo from './logo.svg';
// import './App.css';

import { Container, Grid, makeStyles, useTheme } from "@material-ui/core";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(10),
    minHeight: "100vh",
    padding: theme.spacing(5),
  },
}));
function App() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Grid container className={classes.wrapper}>
        <Grid item xs="12" sm="12" md="8">
          <MainContent />
        </Grid>
        <Grid item xs="12" sm="12" md="4">
          <Aside />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default App;
