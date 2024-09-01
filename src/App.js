import './App.css';
import Layout from './components/Layouts/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <p>Main content</p> */}
          <Route index element={<Home/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
