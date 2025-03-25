import styles from '../styles'

import { Text, ScrollView, TouchableOpacity, View, Button, TextInput  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//const ItemTypes = ["Laptops", "Desktops", "Monitors", "Other Accessories/Cables"];


import ProductContext from '../Context/ProductContext';
import { useContext } from 'react';

import { useDispatch } from 'react-redux';
import { editProduct } from '../Store/ProductSlice';

const EditProduct = (props) => {
    //const {Categories, ListOfProducts, addProductFunction, editProductFunction} = useContext(ProductContext);

    //const editFunction = editProductFunction();
    const dispatch = useDispatch();
    const Product = props.route.params.productItem;
    // can't edit a const like the video, need ot make a safe copy
    let replacementProduct = { ...Product };


    return (
        <View>
            <Text> Product Name: </Text>
            <TextInput style={styles.textInputStyle}
                defaultValue={Product.name}
                onChangeText = { (newValue) => replacementProduct.name = newValue }
            />
            <Text> Product Price: </Text>
            <TextInput style={styles.textInputStyle}
                defaultValue={Product.price.toString()}
                onChangeText = { (newValue) => replacementProduct.price = newValue }
            />
            <Text> Product Category: </Text>
            <TextInput style={styles.textInputStyle}
                defaultValue={Product.category}
                onChangeText = { (newValue) => replacementProduct.category = newValue }
            />
            <Text> Product Description: </Text>
            <TextInput style={styles.textInputStyle}
                defaultValue={Product.desc}
                onChangeText = { (newValue) => replacementProduct.desc = newValue }
            />


            <Button title = 'Save Changes' onPress={ () => { 
                //console.log(replacementProduct)
                //editFunction(replacementProduct);
                dispatch(editProduct(replacementProduct));
                props.navigation.navigate('List', {productCategory : replacementProduct.category})
                }} />
        </View>
    );
};

export default EditProduct;