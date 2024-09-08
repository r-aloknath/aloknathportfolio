import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from './components/Layouts/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import { useEffect } from 'react';
import Contact from './components/pages/Contact';
import AboutMe from './components/pages/AboutMe';
import Education from './components/pages/Education';
import Blogs from './components/pages/Blogs';
import Projects from './components/pages/Projects';
import BlogDetails from './components/pages/BlogDetails';
import ProjectDetails from './components/pages/ProjectDetails';
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
          <Route path='about' element={<AboutMe/>}/>
          <Route path='education' element={<Education/>}/>
          <Route path='blogs' element={<Blogs/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='blog-details' element={<BlogDetails/>}/>
          <Route path='project-details' element={<ProjectDetails/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
