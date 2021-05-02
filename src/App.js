// import logo from './logo.svg';
// import './App.css';

import { Container } from "@material-ui/core";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container>
        <Header />
        <MainContent />
        <Aside />
        <Footer />
      </Container>
    </>
  );
}

export default App;
