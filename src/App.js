import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Inicio from "./components/Paginas/inicio";
import Modelos from "./components/Paginas/Modelos";
import Contacto from "./components/Paginas/Contacto";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import EtiosImg from "./components/ProfileCard/assets/etios.jpg";
import YarisImg from "./components/ProfileCard/assets/yaris.jpg";
import CorollaImg from "./components/ProfileCard/assets/corolla.jpg";
import HiluxImg from "./components/ProfileCard/assets/hilux.jpg";

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
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <ProfileCard titulo="Etios" img={EtiosImg} alt="EtiosImg" />
          </div>
          <div className="col">
            <ProfileCard titulo="Yaris" img={YarisImg} alt="YarisImg" />
          </div>
          <div className="col">
            <ProfileCard titulo="Corolla" img={CorollaImg} alt="CorollaImg" />
          </div>
          <div className="col">
            <ProfileCard titulo="Hilux" img={HiluxImg} alt="HiluxImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
library.add(faPlus);
export default App;
