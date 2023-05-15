import Landing from "./Pages/Landing/Landing";
import { BrowserRouter, Route } from 'react-router-dom';
import Resultado from "./Pages/Landing/Resultado";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Resultado" component={Resultado} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
