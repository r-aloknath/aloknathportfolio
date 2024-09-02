import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from './components/Layouts/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import { useEffect } from 'react';
import Contact from './components/pages/Contact';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <p>Main content</p> */}
          <Route index element={<Home/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
