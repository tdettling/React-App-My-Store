import {createSlice} from '@reduxjs/toolkit';

// name and inital state, reducders

const ProductCategories = ["Laptops", "Desktops", "Monitors", "Other Accessories/Cables"];


const CategoriesSlice = createSlice(
    {
        name : "Categories", 
        initialState : ProductCategories, 
        reducers: {
            //key-vlaue, action type: function
            showCategory: (state, action) => {
                console.log(state);
            }
        }
    }
);


export const { showCategory} = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
