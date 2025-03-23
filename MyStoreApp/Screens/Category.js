import { Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//const ItemTypes = ["Laptops", "Desktops", "Monitors", "Other Accessories/Cables"];


//import ProductContext from '../Context/ProductContext';
//import { useContext } from 'react';

import { UseSelector, useDispatch, useSelector } from 'react-redux'


const Category = (props) => {
    //const {Categories, ListOfProducts, addProductFunction, editProductFunction} = useContext(ProductContext);
  const {CategoryOfProducts} = useSelector( (state) => state.productData)

  return (
    <ScrollView>
      {CategoryOfProducts.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => {props.navigation.navigate('List', { productCategory: item }); }}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Category;
