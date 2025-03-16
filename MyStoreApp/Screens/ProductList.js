import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { useLayoutEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

import ProductContext from '../Context/ProductContext';
import { useContext } from 'react';

const ProductList = (props) => {

  const [PCategory, PList] = useContext(ProductContext);

  const selectedCategory = props.route.params.productCategory;

  // Filter products by the selected category
  const categoryProducts = PList.filter((product) => product.category === selectedCategory);

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
        <TouchableOpacity
          key={product.id}
          onPress={() => { props.navigation.navigate('Details', {productItem : product}) }} >
          <Text style={styles.productName}>{product.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ProductList;
