// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Services from "./pages/services";
import Contact from "./pages/contact";
import About from "./pages/about";
import ScrollToTop from "./components/ScrollToTop";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <div>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
