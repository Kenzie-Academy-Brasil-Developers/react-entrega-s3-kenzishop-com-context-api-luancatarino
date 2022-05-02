import Product from "../Product";
import { CardList } from "./styles";
import { useContext } from "react";
import { CatalogueContext } from "../../providers/products";

function ProductsList() {
    const { catalogue } = useContext(CatalogueContext);

    return (
        <CardList>
            {catalogue.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </CardList>
    );
}

export default ProductsList;
