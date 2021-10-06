import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import DisplayPosts from './components/desplayPosts//displayPosts'
import 'bootstrap/dist/css/bootstrap.min.css'; import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/displayPosts/:id">
            <DisplayPosts></DisplayPosts>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
