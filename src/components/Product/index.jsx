import { CardProduct, CartProduct } from "./styles";
import { useCart } from "../../providers/cart";

function Product({ product, isRemovable = false }) {
    const { name, by, price, img } = product;

    const { addToCart, removeFromCart } = useCart();

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
