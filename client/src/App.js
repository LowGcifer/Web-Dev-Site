import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Services from "./pages/services";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <div>
        <Routes>
          <Route exact path="/" element=<Home /> />
          <Route exact path="/services" element=<Services /> />
        </Routes>
      </div>
    </Router>

    // <Home></Home>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
