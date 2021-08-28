import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Home from './pages/Home';
// Mediante React Router DOM podemos añadir las rutas que queramos y crear la estructura de la app.
// En mi caso, se carga la Navbar siempre, y según la ruta (si es correcta carga Home, si no es correcta carga Error)
// cargará un componente u otro.
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
