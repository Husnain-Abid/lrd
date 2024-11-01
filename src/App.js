import './App.css';
import Home from './page/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Home />}> </Route>

        </Routes>

      </Router>
    </>
  );
}

export default App;
