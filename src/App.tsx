import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Shop from './pages/Shop'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-white">
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur shadow-sm">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Swagath Groceries Logo" className="h-10 w-10" />
              <span className="font-extrabold text-2xl text-green-700 tracking-tight">Swagath Groceries</span>
            </div>
            <ul className="flex gap-6 text-gray-700 font-semibold text-lg">
              <li><Link to="/" className="hover:text-green-600 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-600 transition">About</Link></li>
              <li><Link to="/menu" className="hover:text-green-600 transition">Menu</Link></li>
              <li><Link to="/shop" className="hover:text-green-600 transition">Shop</Link></li>
              <li><Link to="/contact" className="hover:text-green-600 transition">Contact</Link></li>
            </ul>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-bold shadow transition">Sign Up</button>
          </nav>
        </header>
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-white border-t mt-12 py-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Swagath Groceries. All rights reserved.
        </footer>
      </div>
    </Router>
  )
}

export default App
