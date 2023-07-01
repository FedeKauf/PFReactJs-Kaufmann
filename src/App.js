import NavBar from "./components/Navbar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/Paginas/Home";
import Accesorios from "./components/Paginas/Accesorios"
import Contacto from "./components/Paginas/Contacto";
import Error from "./components/Paginas/Error";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="itemId" element={<ItemDetailContainer/>} />
            <Route path="Accesorios" element={<Accesorios/>} />
            <Route path="Contacto" element={<Contacto/>} />
            <Route path="*" element={<Error/>} />
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
library.add(faPlus);
export default App;
