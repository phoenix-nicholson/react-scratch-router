import Home from './view/Home';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="heading">Studio Ghibli</h1>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
