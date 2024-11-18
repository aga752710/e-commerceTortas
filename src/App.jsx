import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecera from "./components/layout/Cabecera/Cabecera";
import Navbar from "./components/layout/NavBar/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import Cart from "./components/pages/Cart/Cart";
import ItemDetail from "./components/pages/ItemDetail/ItemDetail";


function App() {
  return (
    <BrowserRouter>
    <Cabecera/>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:name" element={<ItemListContainer />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;