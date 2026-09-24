import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthModal from "./Componets/AuthModal/AuthModal";
import { Footer } from "./Componets/Footer/Footer";
import { Hero } from "./Componets/Hero/Hero";
import { Navbar } from "./Componets/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import ProductDteil from "./Pages/Deteil/ProductDteil";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home />
            </>
          }
        />
        <Route path="/category/:id" element={<ProductsPage />} />
        <Route path="/Deteil/:id" element={<ProductDteil />} />

      </Routes>
      <AuthModal />
      <Footer />
    </>
  );
}

export default App;