import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Starred from "./pages/Starred";
import Home from "./pages/Home";
import Show from "./pages/Show";
const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: "#353535",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/anu">
          <Starred />
        </Route>
        <Route exact path="/show/:id">
          <Show />
        </Route>
        <Route>
          <div>Not Found</div>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
