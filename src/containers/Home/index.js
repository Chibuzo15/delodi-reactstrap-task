import * as React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const renderButtons = () => {
    return (
      <div>
        <button>Show Info</button>
        <button>Show Success</button>
        <button>Show Error</button>
        <button>Show Warning</button>
      </div>
    );
  };
  return (
    <div>
      <h1>This is the Home page</h1>
      {renderButtons()}
      <button>
        <Link to="/other">Go To Next Page </Link>
      </button>
    </div>
  );
};

export default HomePage;
