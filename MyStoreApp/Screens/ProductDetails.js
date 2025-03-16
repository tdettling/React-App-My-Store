import { Text, View, TouchableOpacity } from 'react-native'
import { useContext, useLayoutEffect } from 'react'
import styles from '../styles'
import { AntDesign, Feather } from '@expo/vector-icons';

import DataContext from '../Context/ProductContext';

const ProductDetails = (props) => {
    const Product = props.route.params.productItem;
    const v = useContext(DataContext);

    console.log(v);

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight : () => {
                return (
                    <TouchableOpacity onPress={ () => {props.navigation.navigate('Edit')}}>
                    <Feather name="edit" size={24} color="black" />
                    </TouchableOpacity>
                )
            }
        });
      }, []);

    return (
        <Text>
            {Product.name}, {Product.price}, {Product.desc}
        </Text>
    );
};

export default ProductDetails;