import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Contacto from "./components/Paginas/Contacto";
import Error from "./components/Paginas/Error";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Toyoya Argentina"}/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos por categoria"}/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />            
            <Route path="/cart" element={<Cart />} />
            <Route path="Contacto" element={<Contacto />} />
            <Route path="*" element={<Error />} />
          </Routes> 
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}
library.add(faPlus);
export default App;
