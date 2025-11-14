import './App.css';
import './css/Responsive.css';
import Home from './components/Home/Home';
import {
   BrowserRouter as Router,
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Preloader from './components/Preloader/Preloader';

function App() {
   return (
      <>
         <Preloader />
         <Router>
            <AnimatePresence mode="wait">
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
               >
                  <Header />
                  <Home />
                  <ScrollToTop />
               </motion.div>
            </AnimatePresence>
         </Router>
      </>
   );
}

export default App;
