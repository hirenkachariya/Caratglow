import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componets/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './Componets/ProductDetails';
import CategoryProduct from './Componets/CategoryProduct';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import { MantineProvider, } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
  return (
    <div className="App">
      <MantineProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productdetails' element={<ProductDetails />} />
            <Route path='/categoryproduct' element={<CategoryProduct />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;


