import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sperc from './SPERC/Sperc'
import RegisterUser from './register/RegisterUser';
import Home from './home/Home';
import NavBar from './home/NavContainer';
import Results from './results/results';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route exact path='/sperc' Component={Sperc} />
          <Route exact path='/results' Component={Results} />
          <Route exact path='/register' Component={RegisterUser} />
          <Route exact path='/' Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
