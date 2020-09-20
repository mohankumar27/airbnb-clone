import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import SearchPage from "./router/Search/SearchPage";
import Home from "./router/Home/Home";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header />
        <Switch>
          {/* Search page Router*/}
          <Route path="/search" component={SearchPage} />
          {/* Home Router*/}
          <Route path="/" component={Home} />
        </Switch>

        {/* footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
