import { Link } from "react-router-dom";


const Item = ({ id, name, img, category }) => {
  return (
    <div className="container w-50 justify-content-center">
      <div className="card shadow-lg p-3 mb-5 bg-body-tertiary">
        <div className="card-img-top">
          <article className="card-body text-center">
            <header>
              <h2 className="card-title">{name}</h2>
            </header>
            <picture>
              <img src={img} alt={name} />
            </picture>
            <section>
              <p>{category}</p>
            </section>
            <footer>
              <Link to={`/item/${id}`}>Ver ficha</Link>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Item;
