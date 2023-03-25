import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog'
import { AddPost } from './components/AddPost/AddPost';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

function App() {
//   const navigate = useNavigate();

  return (
    <Router>
    <div className="App">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/addPost' element={<AddPost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </div>
  </Router>
  );
}

export default App;
