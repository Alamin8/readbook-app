import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import MainPages from "./components/mainpages/Pages";




const App = () => {
  return (
    <DataProvider>
      <Router>
        <div className="app">
          <MainPages/>
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;