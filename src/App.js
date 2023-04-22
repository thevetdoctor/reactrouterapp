import { Router, Route, Link } from './RouterLib.js'
import './App.css';

function Home() {
  return (
    <div  style={{ backgroundColor: 'silver', color: '#fff', height: '100vh', padding: '2em'}} >
      <h1>Home </h1>
      <Link to='/about'>Go to About Page</Link>
    </div>
  )
}

function About() {
  return (
    <div style={{ backgroundColor: 'gray', color: '#fff', height: '100vh', padding: '2em'}} className='bg-black text-white'>
      <h1>About Us</h1>
      <Link to='/'>Go to Home Page</Link>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Router>
  );
}

export default App;
