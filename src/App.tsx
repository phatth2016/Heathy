import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import ListColumn from './pages/ListColumn';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/list-column' element={<ListColumn/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
