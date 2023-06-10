import cart from "./assets/GifBasket.gif";

const CartWidget = () => {
    return(
        <div>
            <img width="100" src={cart} alt="cart-widget"/>
            <p className="text-center">27</p>
        </div>
        
    )
}

export default CartWidget;