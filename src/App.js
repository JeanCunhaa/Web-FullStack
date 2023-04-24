import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Cadastro</li>
        <li>Login</li> 
     </ul>
     <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/cadastro">
          <Cadastro></Cadastro>
        </Route>

        <Route exact path="/login">
          <Login></Login>
        </Route>

        <Route exact path="/postagens">
          <Postagens></Postagens>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
