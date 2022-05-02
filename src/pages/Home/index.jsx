import { useHistory } from "react-router-dom";
import ProductList from "../../components/ProductsList";
import { Header } from "./styles";
import { CartContext } from "../../providers/cart";
import { useContext } from "react";

function HomePage() {
    const { cart } = useContext(CartContext);

    const history = useHistory();

    const toCart = () => {
        history.push("/cart");
    };

    return (
        <>
            <Header>
                <h1>KenzieBook</h1>
                <div>
                    <p>{cart.length}</p>
                    <button onClick={toCart}>Carrinho</button>
                </div>
            </Header>
            <ProductList />
        </>
    );
}

export default HomePage;
