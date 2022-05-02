import Product from "../Product";
import { useContext } from "react";
import { CartList, Container, TotalCart } from "./styles";
import { CartContext} from "../../providers/cart"

function Cart() {
    const { cart } = useContext(CartContext);

    const totalCart = cart.reduce((total, current) => {
        return current.price + total;
    }, 0);

    return (
        <Container>
                <CartList>
                    {cart.map((product) => (
                        <Product key={product.id} product={product} isRemovable />
                    ))}
                </CartList>
            

            <TotalCart>
                <h2>Resumo do Pedido</h2>
                <div>
                    <p>{cart.length} Produtos</p>
                    <p>R$ {totalCart.toFixed(2)}</p>
                </div>
                <button>Finalizar Pedido</button>
            </TotalCart>
        </Container>
    );
}

export default Cart;