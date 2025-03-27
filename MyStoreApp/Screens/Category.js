import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

const Category = (props) => {
  const { CategoryOfProducts } = useSelector((state) => state.productData);

  return (
    <ScrollView>
      <View>
        {CategoryOfProducts.map((item, index) => (
          <TouchableOpacity style={styles.displayProductListContainer}
            key={index} 
            onPress={() => props.navigation.navigate('List', { productCategory: item })}
          >
            <View > 
              <Text >{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Category;
