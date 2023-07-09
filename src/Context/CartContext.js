import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []

})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item,quantity}])
            setTotal( total + (item.price*quantity))
        }else {
            console.error('El producto ya fue agregado')
        }
    }
  

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
        setTotal(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total }}>
            { children }
        </CartContext.Provider>
    )
}
