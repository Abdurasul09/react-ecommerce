import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.js"
import Home from "./components/home/Home.js";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart.js";
import Projects from "./pages/projects/Projects.js";
import Wishlist from "./pages/wishlist/Wishlist.js";
function App() {
  return (
  <div className="App">
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/wishlist" element={<Wishlist/>}/>
  </Routes>
  </div>)
}

export default App;
