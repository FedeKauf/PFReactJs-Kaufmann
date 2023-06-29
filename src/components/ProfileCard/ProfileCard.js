import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

function ProfileCard({ img, alt, titulo }) {
  const [count, setCount] = useState(0);

  function handleClickAgregar() {
    setCount(count + 1);
  }
  function handleClickEliminar() {
    setCount(count - 1);
  }

  return (
    <div className="card shadow-lg p-3 mb-5 bg-body-tertiary">
      <div className="card-img-top">
        <img src={img} alt={alt} />
        <div className="card-body"></div>
        <h3 className="card-title">{titulo}</h3>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <span className="d-flex justify-content center shadow-sm p-3 bg-body-tertiary rounded rounded-pill">{count}</span>
        <button href="#" onClick={handleClickAgregar} className="btn btn-outline-success m-2">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button href="#" className="btn btn-outline-info m-2">
          <FontAwesomeIcon icon={faInfoCircle} />
        </button>
        <button href="#" onClick={handleClickEliminar} className="btn btn-outline-danger m-2">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        
        <span className="d-flex justify-content-center p-2">
          
        </span>
      </div>
    </div>
  );
}

export default ProfileCard;
