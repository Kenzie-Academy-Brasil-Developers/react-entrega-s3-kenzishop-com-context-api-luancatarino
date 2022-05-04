import Product from "../Product";
import { CardList } from "./styles";
import {useCatalogue} from "../../providers/products"

function ProductsList() {
    const { catalogue } = useCatalogue()

    return (
        <CardList>
            {catalogue.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </CardList>
    );
}

export default ProductsList;
