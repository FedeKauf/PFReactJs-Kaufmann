import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)
    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to= "/">Volver al inicio</Link>
            </div>
        )
    }
    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: $ {total}</h3>
            <button onClick={() => clearCart()}  className="container btn btn-outline-info m-2" >Limpiar carrito</button>
            <Link to="/checkout" className="border-black px-3 pb-1 rounded-pill text-white text-decoration-none bg-secondary bg-gradient d-flex justify-content-center mx-4 mt-3">Checkout</Link>
        </div>
    )
}

export default Cart
