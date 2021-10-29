import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home';
import AuthProvider from './context/AuthProvider';
import Footer from './Components/Shared/Footer/Footer';
import Package from './Components/Package/Package';
import Offers from './Components/Offers/Offers';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/offers">
            <Offers></Offers>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
