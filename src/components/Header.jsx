import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/students">
          <button>All Students</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
