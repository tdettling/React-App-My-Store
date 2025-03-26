import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../Store/ProductSlice'

export const ProductStore = configureStore(
    {
        reducer: {
            productData: ProductReducer, 
        }
    }
);