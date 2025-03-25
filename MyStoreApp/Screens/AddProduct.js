import styles from '../styles'

import { Text, ScrollView, TouchableOpacity, View, Button, TextInput  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//const ItemTypes = ["Laptops", "Desktops", "Monitors", "Other Accessories/Cables"];


import ProductContext from '../Context/ProductContext';
import { useContext } from 'react';

import { useDispatch } from 'react-redux';
import { addProduct } from '../Store/ProductSlice';

const AddProduct = (props) => {
    //const {Categories, ListOfProducts, addProductFunction, editProductFunction} = useContext(ProductContext);
    //const addFunction = addProductFunction();

    const dispatch = useDispatch();

    let newProduct = {};
    newProduct.id = Math.floor(Math.random() * 100);

    return (
        <View>
            <Text> Product Name: </Text>
            <TextInput style={styles.textInputStyle}
                onChangeText = { (newValue) => newProduct.name = newValue }
            />
            <Text> Product Price: </Text>
            <TextInput style={styles.textInputStyle}
                onChangeText = { (newValue) => newProduct.price = newValue }
            />
            <Text> Product Category: </Text>
            <TextInput style={styles.textInputStyle}
                onChangeText = { (newValue) => newProduct.category = newValue }
            />
            <Text> Product Description: </Text>
            <TextInput style={styles.textInputStyle}
                onChangeText = { (newValue) => newProduct.desc = newValue }
            />


            <Button title = 'Add Product' onPress={ () => { 
                //console.log(newProduct)
                //addFunction(newProduct);
                dispatch(addProduct(newProduct));
                props.navigation.navigate('List', {productCategory : newProduct.category})
                }} />
        </View>
    );
};

export default AddProduct;