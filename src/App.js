import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <NavigationBar/>
          <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Portfolio' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
