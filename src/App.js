import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home';
import AuthProvider from './context/AuthProvider';
import Footer from './Components/Shared/Footer/Footer';
import Offers from './Components/Offers/Offers';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Booking from './Components/Booking/Booking/Booking';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/Login/PrivateRoute/PrivateRoute';
import AddService from './Components/AddService/AddService';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import MyOrders from './Components/MyOrders/MyOrders';
import BookingForm from './Components/BookingForm/BookingForm';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:offersId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/bookingForm">
              <BookingForm></BookingForm>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
