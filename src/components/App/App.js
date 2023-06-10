import NavBar from "../Navbar/NavBar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../Paginas/inicio";
import Modelos from "../Paginas/Modelos";
import Contacto from "../Paginas/Contacto";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos a Toyoya Argentina"} />
        <Routes>
          <Route path="/" exact Component={Inicio} />
          <Route path="/Modelos" Component={Modelos} />
          <Route path="/Contacto" Component={Contacto} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;