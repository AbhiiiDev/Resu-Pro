import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import ErrorBoundary from "./components/Editor/ErrorBoundary.jsx";
import Editor from "./components/Editor/Editor.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <ErrorBoundary>
        <Editor/>
      </ErrorBoundary>
    </div>
  );
}

export default App;