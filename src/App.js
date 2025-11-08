import './App.css';
import './css/Responsive.css';
import Home from './components/Home/Home';
import {
   BrowserRouter as Router,
   Routes,
   Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About'
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function App() {
   return (
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
      </Router>
   );
}

export default App;
