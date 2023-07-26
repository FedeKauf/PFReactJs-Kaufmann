import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, total} = useContext(CartContext)
    console.log(cart)
    if(cart.length === 0) {
        return (
            <div>
                <h1 className="carrito-vacio">No hay items en el carrito</h1>
                <Link to= "/" className="d-grid mx-auto container btn btn-outline-info m-4">Volver al inicio</Link>
            </div>
        )
    }
    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3 className="text-center">Total: $ {total}</h3>
            <button onClick={() => clearCart()}  className="d-grid mx-auto container btn btn-outline-info m-2" >Limpiar carrito</button>
            <Link to="/checkout" className="d-grid mx-auto container btn btn-outline-danger m-2">Checkout</Link>
        </div>
    )
}

export default Cart
