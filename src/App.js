// import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NumberText from './components/NumberText';
import Hello from './components/Hello';
import ColorfulText from './components/ColorfulText';

const Home = () => {
  return (
    <h1 style={{ textAlign: "center", color: "navy" }}>Welcome</h1>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route path="/:value/:textColor/:bgColor">
          <ColorfulText />
        </Route>
        <Route path="/hello/:word">
          <Hello />
        </Route>
        <Route path="/:value">
          <NumberText />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;