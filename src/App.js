import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  return (
    <Router>
    <Switch>
  
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;