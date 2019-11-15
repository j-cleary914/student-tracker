import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <div className='Header'>
      <h1>NC Student Tracker</h1>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/students">
          <button>All Students</button>
        </Link>
        <Link to="/blocks">
          <button>Blocks</button>
        </Link>
        <Link to="/stats">
          <button>Statistics</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
