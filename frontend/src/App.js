import "./App.css";
import About from "./Ui/pages/about/About";
import Home from "./Ui/pages/home/Home";
import Projects from "./Ui/pages/projects/Projects";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./Ui/pages";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <MainPage />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Projects} path="/projects" />
          <Route component={About} path="/about" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
