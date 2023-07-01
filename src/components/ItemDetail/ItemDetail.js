import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
  const onAdd = (quantity) => {
    console.log(`Agregó ${quantity} ${name} al carrito`)
  }
  return (
    <div className="container w-50 card shadow-lg p-3 mb-5 bg-body-tertiary">
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
            <p>{description}</p>
            <p>${price}</p>
            <p>Stock Disponible: {stock}</p>
          </section>
          <footer>
            <ItemCount
              initial={1}
              stock={stock}
              onAdd={onAdd}
            />
          </footer>
        </article>
      </div>
    </div>
  );
};

export default ItemDetail;
