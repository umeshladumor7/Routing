import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contect from './components/Contect';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/about" element={<About />}>About Us</Route>
        <Route path="/contect" element={<Contect />}>Contect Us</Route>
        <Route path="/Blog" element={<Blog />}>Blog</Route>
        <Route path="/Form" element={<Form />}>Ragistion Form</Route>
        <Route path="/Table" element={<Table />}>Table</Route>
      </Routes>
    </div>
  );
}

export default App;