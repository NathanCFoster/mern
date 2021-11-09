import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="row">
              <Form />
              <AllProducts />
            </div>} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
