import "./CartWidjet.css";
import cartGif from "./assets/GifBasket.gif";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cart } = useContext(CartContext)

    return(
        <div>
            <Link to="/cart" className= "carrito d-flex" style= {{display:  cart.length > 0}}>
                <img width="100px" src={cartGif} alt="cart-widget"/>
                { cart.length }
            </Link>
        </div>
        
    )
}

export default CartWidget;