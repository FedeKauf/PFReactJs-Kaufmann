import React from "react";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div>
      <h1 className="text-center">Página de contacto</h1>
      <form className="container w-50" action="#" method="GET">
        <legend>Contact Form</legend>
        <div className="mb-2 p-2">
          <label className="form-label">COMPLETE NAME</label>
          <input
            id="1"
            type="text"
            className="form-control border-dark rounded-4"
            placeholder="Your first name"
          />
        </div>
        <div className="mb-2 p-2">
          <label className="form-label">COMPLETE LAST NAME</label>
          <input
            id="2"
            type="text"
            className="form-control border-dark rounded-4"
            placeholder="Your last name"
          />
        </div>
        <div className="mb-2 p-2">
          <label className="form-label">EMAIL ADRESS</label>
          <input
            id="3"
            type="email"
            className="form-control border-dark rounded-4"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-2 p-2">
          <select
            id="4"
            className="form-select btn border-dark rounded-4"
            aria-label="Default select example"
          >
            <option>
              Choose your country
            </option>
            <option value="1">
              Argentina
            </option>
            <option value="2">
              Brasil
            </option>
            <option value="3">
              Colombia
            </option>
            <option value="4">
              Perú
            </option>
            <option value="5">
              Chile
            </option>
            <option value="6">
              Ecuador
            </option>
            <option value="7">
              Venezuela
            </option>
            <option value="8">
              Bolivia
            </option>
            <option value="9">
              Uruguay
            </option>
            <option value="10">
            </option>
          </select>
        </div>
        <label>
          <span className="mb-2 p-2">Comment</span>
          <input type="radio" value="comment" name="radio" />
          <span className="mb-2 p-2">Claim</span>
          <input type="radio" value="claim" name="radio" />
        </label>
        <div className="mb-2 p-2">
          <label className="form-label">Enter your text here</label>
          <textarea
            id="5"
            className="form-control bg-warning-form border-dark rounded-4"
            rows="3"
            placeholder="Hello!, I am contacting you for..."
          ></textarea>
        </div>
        <label>
          <div className="form-check form-switch mb-2">
            <input
              id="6"
              className="form-check-input"
              type="checkbox"
              role="switch"
            />
            <label className="form-check-label">Check to receibe news</label>
          </div>
        </label>
        <div>
          <input
            type="submit"
            value="Send"
            className="mb-2 p-2 border-dark rounded-2"
          />
          <input
            type="submit"
            value="Clean Form"
            className="mb-2 mx-2 p-2 border-dark rounded-2"
          />
        </div>
        <Link to="/" className="d-grid mx-auto container btn btn-outline-info m-4">Volver a Home</Link>
      </form>
      
    </div>
  );
};

export default Contacto;
