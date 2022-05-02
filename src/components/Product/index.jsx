import { CardProduct, CartProduct } from "./styles";
import { CartContext } from "../../providers/cart";
import { useContext } from "react";

function Product({ product, isRemovable = false }) {
    const { id, name, by, price, img } = product;

    const { addToCart, removeFromCart } = useContext(CartContext);

    return (
        <>
            {isRemovable ? (
                <CartProduct>
                    <img src={img} alt={name} />
                    <div>
                        <h3>{name}</h3>
                        <h6>por: {by}</h6>
                        <h4>R$ {price.toFixed(2)}</h4>
                    </div>
                    <button onClick={() => removeFromCart(product)}>Remover</button>
                </CartProduct>
            ) : (
                <CardProduct>
                    <img src={img} alt={name} />
                    <h3>{name}</h3>
                    <h6>por: {by}</h6>
                    <h4>R$ {price.toFixed(2)}</h4>
                    <button onClick={() => addToCart(product)}>Adicionar</button>
                </CardProduct>
            )}
        </>
    );
}

export default Product;
