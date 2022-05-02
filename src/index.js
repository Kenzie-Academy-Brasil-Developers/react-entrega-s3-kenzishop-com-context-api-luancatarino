import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CatalogueProvider } from "./providers/products";
import { CartProvider } from "./providers/cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <CatalogueProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </CatalogueProvider>
        </React.StrictMode>
    </BrowserRouter>
);
