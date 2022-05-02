import { createContext, useState } from "react";
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

        const list = JSON.parse(localStorage.getItem("cart")) || [];

        const newList = [...list, product];

        localStorage.setItem("cart", JSON.stringify(newList));
    };

    const removeFromCart = (product) => {
        const newCart = cart.filter((productOnCart) => productOnCart.id !== product.id);
        setCart(newCart);

        const list = JSON.parse(localStorage.getItem("cart")) || [];

        const newList = list.filter((products) => products.id !== product.id);

        localStorage.setItem("cart", JSON.stringify(newList));
    };

    return <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};
