import Cart from "../../components/Cart";
import { Header, Main } from "./styles";
import { useHistory } from "react-router-dom";

function CartPage() {
    const history = useHistory();

    const toHome = () => {
        history.push("/");
    };
    return (
        <>
            <Header>
                <h1>KenzieBook</h1>
                <button onClick={toHome}>Home</button>
            </Header>
            <Main>
                <Cart />
            </Main>
        </>
    );
}

export default CartPage;
