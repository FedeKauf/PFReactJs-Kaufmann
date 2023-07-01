import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/Paginas/Home";
import Contacto from "./components/Paginas/Contacto";
import Error from "./components/Paginas/Error";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<Home />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
library.add(faPlus);
export default App;
