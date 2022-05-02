import defaultStore from "../database";
import { createContext } from "react";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
    const catalogue = defaultStore;

    return <CatalogueContext.Provider value={{ catalogue }}>{children}</CatalogueContext.Provider>;
};
