import './App.css';
import './css/Responsive.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
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
      <Header/>
     <Switch>
       <Route exact path="/">
       <Home/>
       </Route>
       <Route  path="/home">
          <Home/>
       </Route>
       <Route  path="/about">
          <About/>
       </Route>
       <Route  path="/skills">
          <Skills/>
       </Route>
       <Route  path="/projects">
          <Projects/>
       </Route>
       <Route  path="/blog">
          <Blog/>
       </Route>
       <Route  path="/contact">
          <Contact/>
       </Route>
      
     </Switch>
    </Router>
  );
}

export default App;
