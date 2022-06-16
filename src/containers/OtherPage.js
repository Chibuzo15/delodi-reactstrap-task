import * as React from "react";

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
      <h1>This is the other page</h1>
    </div>
  );
};

export default Page;
