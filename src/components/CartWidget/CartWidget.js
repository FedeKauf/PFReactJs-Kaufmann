import cart from "./assets/GifBasket.gif";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return(
        <div>
            <Link to="/cart" style= {{display:  totalQuantity > 0 ? 'block' : 'none' }}>
                <img width="100px" src={cart} alt="cart-widget"/>
                { totalQuantity }
            </Link>
        </div>
        
    )
}

export default CartWidget;