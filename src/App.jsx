import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//PAGES
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Normas from './pages/Normas'
import Contact from './pages/Contact'

//UTILS
import ScrollToTop from './utils/ScrollTop'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/normas" element={<Normas />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        
      </Routes>
    </Router>
  )
}

export default App
