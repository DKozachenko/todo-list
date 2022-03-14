import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {myStore} from "./store";
import Page from "./components/Page/Page";

function App() {
  return (
      <Provider store={myStore}>
          <Page/>
      </Provider>
  );
}

export default App;
