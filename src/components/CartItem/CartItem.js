


const CartItem =  ({ name, img, price, quantity}) => {
    return (
    <div className="container w-50 justify-content-center">
      <div className="card img-hover shadow-lg mb-5 mt-5 bg-body-tertiary ">
        <div className="card-img-top">
          <article className="card-body text-center">
            <header>
              <h2 className="card-title">{name}</h2>
            </header>
            <picture>
              <img src={img} alt={name} className="mw-100" />
            </picture>
            <section>
              <p>Precio: {price}</p>
              <p>Cantidad: {quantity}</p>
            </section>
          </article>
        </div>
      </div>
    </div>
);
}

export default CartItem