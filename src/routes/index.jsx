import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/Home";
import CartPage from "../pages/Cart";

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/cart">
                <CartPage />
            </Route>
        </Switch>
    );
}

export default Routes;
