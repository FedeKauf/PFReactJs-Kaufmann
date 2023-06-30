import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";


const Home = () => {
  return(
      <div>
          <h1 className="text-center">Página principal</h1>
          <ItemListContainer greeting={"Bienvenidos a Toyoya Argentina"}/>
      </div>
  )
}

export default Home;
