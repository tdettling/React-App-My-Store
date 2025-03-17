import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { useLayoutEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

import ProductContext from '../Context/ProductContext';
import { useContext } from 'react';

const ProductList = (props) => {

    const {Categories, ListOfProducts, addProductFunction, editProductFunction, deleteProductFunction} = useContext(ProductContext);

    const selectedCategory = props.route.params.productCategory;

  // Filter products by the selected category
    const categoryProducts = ListOfProducts.filter((product) => product.category === selectedCategory);

  useLayoutEffect(() => {
    props.navigation.setOptions({
        headerRight : () => {
            return (
                <TouchableOpacity onPress={ () => {props.navigation.navigate('Add')}}>
                <AntDesign name="plussquare" size={24} color="black" />
                </TouchableOpacity>
            )
        }
    });
  }, []);

  return (
    <ScrollView>
      {categoryProducts.map((product) => (
        <View style={styles.displayProductListContainer}> 
                <TouchableOpacity
                    key={product.id}
                    onPress={() => { props.navigation.navigate('Details', {productItem : product}) }} >
                    <Text style={styles.productName}>{product.name}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => {
                    const delProd = deleteProductFunction();
                    delProd(product.id);
                }}>
                    <AntDesign name="delete" size={24} color='black' />
                </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProductList;
