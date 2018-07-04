import React from "react";

import Layout from "./components/Layout/Layout";

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <h1>Building a Burger</h1>
          <h2>Best Burger in Town</h2>
        </Layout>
      </div>
    );
  }
}

export default App;
