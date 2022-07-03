
import {Switch,Route} from "react-router-dom";
import Navs from "./components/Navs";
import Anu from "./pages/Anu";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Navs/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/anu">
        <Anu/>
      </Route>
      <Route>
       <div>
        Not Found
       </div>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
