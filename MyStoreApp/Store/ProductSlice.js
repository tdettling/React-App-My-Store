import {createSlice} from '@reduxjs/toolkit';

// name and inital state, reducders

const ProductCategories = ["Laptops", "Desktops", "Monitors", "Other Accessories/Cables"];

const Products = [
    // Laptops
    { id: 1, category: "Laptops", name: "5550 Laptop", price: 1210.00, desc: "i7 155U Intel processor, Intel Integrated graphics 15''", prodImage: require('../assets/images/5550.jpg'), rating: 5.0, reviewCount: 1200 },
    { id: 2, category: "Laptops", name: "Dell XPS 13", price: 999.99, desc: "Intel i7, 13-inch screen, 16GB RAM, 512GB SSD", prodImage: require('../assets/images/xps.jpg'), rating: 4.8, reviewCount: 950 },
    { id: 3, category: "Laptops", name: "MacBook Air M1", price: 1099.99, desc: "Apple M1 chip, 13-inch Retina display, 8GB RAM, 256GB SSD", prodImage: require('../assets/images/macbookAir.jpg'), rating: 4.9, reviewCount: 1800 },
    { id: 4, category: "Laptops", name: "HP Spectre x360", price: 1299.99, desc: "Intel i7, 13.3-inch 4K touchscreen, 16GB RAM, 512GB SSD", prodImage: require('../assets/images/hp.jpg'), rating: 4.7, reviewCount: 850 },

    // Desktops
    { id: 5, category: "Desktops", name: "Apple iMac 24-inch", price: 1499.99, desc: "M1 chip, 8GB RAM, 256GB SSD, 4.5K Retina display", prodImage: require('../assets/images/iMac.jpg'), rating: 4.9, reviewCount: 1200 },
    { id: 6, category: "Desktops", name: "Dell Inspiron 3880", price: 699.99, desc: "Intel i5, 8GB RAM, 1TB HDD, 21.5-inch screen", prodImage: require('../assets/images/inspiron.jpg'), rating: 4.3, reviewCount: 600 },
    { id: 7, category: "Desktops", name: "HP Pavilion Desktop", price: 799.99, desc: "Intel i7, 16GB RAM, 512GB SSD", prodImage: require('../assets/images/hp_desktop.jpg'), rating: 4.6, reviewCount: 750 },
    { id: 8, category: "Desktops", name: "Acer Aspire TC", price: 499.99, desc: "Intel i3, 4GB RAM, 1TB HDD", prodImage: require('../assets/images/acer_desktop.jpg'), rating: 4.0, reviewCount: 400 },

    // Monitors
    { id: 9, category: "Monitors", name: "LG 27GN950-B", price: 549.99, desc: "27-inch, 4K UHD, 144Hz refresh rate, G-Sync support", prodImage: require('../assets/images/LG_monitor.jpg'), rating: 4.7, reviewCount: 900 },
    { id: 10, category: "Monitors", name: "Samsung Odyssey G7", price: 699.99, desc: "27-inch, QHD, 240Hz refresh rate, Curved display", prodImage: require('../assets/images/samsung_monitor.jpg'), rating: 4.8, reviewCount: 1100 },
    { id: 11, category: "Monitors", name: "Dell UltraSharp U2720Q", price: 599.99, desc: "27-inch 4K UHD, 60Hz, USB-C connectivity", prodImage: require('../assets/images/Dell_monitor.jpg'), rating: 4.6, reviewCount: 750 },
    { id: 12, category: "Monitors", name: "BenQ PD2700U", price: 449.99, desc: "27-inch, 4K UHD, IPS display, factory calibrated", prodImage: require('../assets/images/benq_monitor.jpg'), rating: 4.5, reviewCount: 600 },

    // Other Accessories/Cables
    { id: 13, category: "Other Accessories/Cables", name: "Anker USB-C to USB-A Cable", price: 14.99, desc: "6ft USB-C to USB-A cable for fast data transfer", prodImage: require('../assets/images/anker_cable.jpg'), rating: 4.8, reviewCount: 1500 },
    { id: 14, category: "Other Accessories/Cables", name: "Logitech Wireless Mouse", price: 29.99, desc: "Ergonomic wireless mouse with a long battery life", prodImage: require('../assets/images/logi_mouse.jpg'), rating: 4.7, reviewCount: 2000 },
    { id: 15, category: "Other Accessories/Cables", name: "Bose QuietComfort 35 II", price: 299.99, desc: "Noise-cancelling over-ear headphones with Bluetooth", prodImage: require('../assets/images/bose_headphones.jpg'), rating: 4.9, reviewCount: 1800 },
    { id: 16, category: "Other Accessories/Cables", name: "Kensington USB-C Docking Station", price: 159.99, desc: "Docking station with multiple USB ports and HDMI output", prodImage: require('../assets/images/kenz_dock.jpg'), rating: 4.6, reviewCount: 800 },
    { id: 17, category: "Other Accessories/Cables", name: "Apple AirPods Pro", price: 249.99, desc: "Wireless in-ear headphones with noise cancellation", prodImage: require('../assets/images/airpods.jpg'), rating: 4.8, reviewCount: 2500 },
    { id: 18, category: "Other Accessories/Cables", name: "Belkin 10-Outlet Power Strip", price: 39.99, desc: "10 outlets, surge protection, 6-foot cord", prodImage: require('../assets/images/belkin_outlet.jpg'), rating: 4.5, reviewCount: 900 }
];




const ProductSlice = createSlice(
    {
        name : "ProductItems", 
        initialState : {
            ListOfProducts: Products, 
            CategoryOfProducts: ProductCategories
        }, 

        reducers: {
            //key-vlaue, action type: function
            addProduct: (state, action) => {
                //[...state, action.payload];
                state.ListOfProducts.push(action.payload);
            }, 
            
            editProduct: (state, action) => {
                //state.map ((prod) => prod.id === action.payload.id ? action.payload : prod);
                for(let i=0; i< state.ListOfProducts.length; i++){
                    if(state.ListOfProducts[i].id == action.payload.id){
                        state.ListOfProducts.splice(i, 1, action.payload)
                    }
                }
            }, 

            deleteProduct: (state, action) => {
                //state.filter( (prod) => prod.id !== action.payload);
                for(let i = 0; i<state.ListOfProducts.length; i++){
                    if(state.ListOfProducts[i].id == action.payload){
                        state.ListOfProducts.splice(i, 1);
                    }
                }
            },
        }
    }, 
);


export const {addProduct, editProduct, deleteProduct} = ProductSlice.actions;
export default ProductSlice.reducer;
