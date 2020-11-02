import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard'
import "./App.css";
import 'bulma/css/bulma.css'
import CreateListing from './components/listings/CreateListing'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/create" component={CreateListing} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
