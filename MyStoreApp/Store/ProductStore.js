import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../Store/ProductSlice'
import CategoriesSliceReducer from '../Store/CatagoriesSlice'

export const ProductStore = configureStore(
    {
        reducer: {
            productData: ProductReducer, 
        }
    }
);