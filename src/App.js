import './App.css';
import AllProducts from './Components/AllProducts/AllProducts';
import CasualProducts from './Components/CasualProducts/CasualProducts';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SportProducts from './Components/SportProducts/SportProducts';

import { ProductProvider } from './context/ProductContext';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<AllProducts />}></Route>
          <Route path='/sport' element={<SportProducts />}></Route>
          <Route path='/casual' element={<CasualProducts />}></Route>
          <Route path='/search' element={<AllProducts />}></Route>
          <Route path='/details/:id' element={<Details />}></Route>
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
        <Footer />
      </div>
    </ProductProvider>
  );
}

export default App;
