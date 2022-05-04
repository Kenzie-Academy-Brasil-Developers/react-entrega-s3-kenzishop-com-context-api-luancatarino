import { createContext, useState, useContext } from "react";
import { v4 as uuid } from "uuid";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    const addToCart = (product) => {
        product = {
            img: product.img,
            name: product.name,
            by: product.by,
            price: product.price,
            id: uuid(),
        };
        setCart([...cart, product]);

        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const removeFromCart = (product) => {
        const newCart = cart.filter((productOnCart) => productOnCart.id !== product.id);
        setCart(newCart);

        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    return <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext)