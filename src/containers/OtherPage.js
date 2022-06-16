import * as React from "react";
import { Link } from "react-router-dom";

const Page = () => {
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
      <button>
        <Link to="/">Go Home </Link>
      </button>
      <h1>This is the other page</h1>
      {renderButtons()}
    </div>
  );
};

export default Page;
