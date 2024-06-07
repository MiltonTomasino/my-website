import './css_folder/App.css';
import Navbar from './Components/Navbar';
import Portfolio from './Pages/portfolio';
import Home from './Pages/home';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <div className='body-content'>
        <body>
          <p>Testing the text function in this website</p>
        </body>
      </div>
    </div>
  );
}

export default App;
