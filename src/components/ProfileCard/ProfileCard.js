import { useState } from "react";

function ProfileCard({ img,alt,titulo, }) {

    const [count, setCount] = useState(0);

    function handleClickAgregar(){
        setCount( count + 1 );
    }
    function handleClickEliminar(){
        setCount( count - 1 );
    }


  return (
    <div className="card">
      <div className="card-img-top">
        <img src={img} alt={alt} />
        <div className="card-body"></div>
        <h3 className="card-title">{titulo}</h3>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button href="#" onClick={handleClickAgregar} className="btn btn-primary m-1">
          Agregar
        </button>
        <button href="#" onClick={handleClickEliminar} className="btn btn-primary m-1">
        Eliminar
        </button>
        <button href="#" className="btn btn-primary m-1">
        Detalles
        </button>
        <span className="d-flex justify-content-center p-2">Cantidad {count}</span>
      </div>
    </div>
  );
}

export default ProfileCard;
