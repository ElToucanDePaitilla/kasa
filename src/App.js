import React from 'react';
import './styles/styles.scss';
import './styles/app.scss';
import {
  RouterProvider
} from "react-router-dom";
import Router from "./Router";


function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={Router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
