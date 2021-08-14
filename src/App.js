import Header from './header';
import Home from './home';
import Cart from './cart';
import Register from './register';
import Login from './login';
import Footer from './footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './style.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart">
            <Header />
            <Cart />
            <Footer />
          </Route>
          <Route path="/register">
            <Header />
            <Register />
            <Footer />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path="/">
            {/* path="/" must be putted at the end */}
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
