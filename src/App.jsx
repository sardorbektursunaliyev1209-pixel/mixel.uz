import "./App.css";
import AuthModal from "./Componets/AuthModal/AuthModal";
import { Footer } from "./Componets/Footer/Footer";
import { Hero } from "./Componets/Hero/Hero";
import { Navbar } from "./Componets/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Hero/> 
      <Home/>
      <AuthModal/>   
      <Footer/>
    </>
  );
}

export default App;
