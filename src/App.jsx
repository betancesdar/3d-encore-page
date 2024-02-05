import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home, About, Solutions, Contact, Quantation} from './pages'
const App = () => {
  return (
  <main className='bg-slate-200/20'>
    <Router>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/solutions' element={<Solutions />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/quantation' element={<Quantation />} />
        </Routes>
    </Router>
  </main>
  )
}

export default App
