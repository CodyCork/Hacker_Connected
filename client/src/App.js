import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import NavBar from "./Navbar.jsx";

// const React = require("react")
// const Def = require('./default')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="navbar">
          <NavBar />
        </div>

        <div>
          <h1 id="title">HACKER CONNECTED</h1>
        </div>
        <div id="welcome">
          <h2>Welcome to the social network for hackers!</h2>
        </div>
        <div>
        <h3>Leapfrog mega fopen d00dz foo strlen tunnel in rm -rf finally gc mountain dew stack trace false perl vi semaphore float less fatal foad python tarball. Var void then do daemon xss continue recursively man pages James T. Kirk unix flood system printf pragma double January 1, 1970 L0phtCrack *.* if for. Afk protocol frack giga loop leet machine code salt int suitably small values endif hash.</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
