import { BrowserRouter as Router,Switch,Route } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
          <Header></Header>
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
