import { Switch, Route } from "react-router-dom";
import Anu from "./pages/Anu";
import Home from "./pages/Home";
import Show from "./pages/Show";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/anu">
        <Anu />
      </Route>
      <Route exact path="/show/:id">
        <Show />
      </Route>
      <Route>
        <div>Not Found</div>
      </Route>
    </Switch>
  );
}

export default App;
