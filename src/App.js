import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard'
import "./App.css";
import 'bulma/css/bulma.css'
import CreateListing from './components/listings/CreateListing'
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import ProfilePage from "./components/profile/ProfilePage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/create" component={CreateListing} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
