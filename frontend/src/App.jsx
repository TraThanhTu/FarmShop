import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import ShopCategoryPage from './pages/ShopCategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginSignUpPage from './pages/LoginSignUpPage';
import Footer from './components/Footer/Footer';
import fruit_banner from './assets/fruit_banner.png';
import vegetable_banner from './assets/vegetable_banner.png';
import present_banner from './assets/present_banner.png';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route
            path="/fruit"
            element={
              <ShopCategoryPage banner={fruit_banner} category="fruit" />
            }
          />
          <Route
            path="/vegetable"
            element={
              <ShopCategoryPage
                banner={vegetable_banner}
                category="vegetable"
              />
            }
          />
          <Route
            path="/present"
            element={
              <ShopCategoryPage banner={present_banner} category="present" />
            }
          />
          <Route path="/products" element={<ProductPage />}>
            <Route path=":productId" element={<ProductPage />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginSignUpPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
