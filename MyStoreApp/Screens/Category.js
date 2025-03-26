import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

const Category = (props) => {
  const { CategoryOfProducts } = useSelector((state) => state.productData);

  return (
    <ScrollView contentContainerStyle={styles.categoryContainer}>
      <View style={styles.grid}>
        {CategoryOfProducts.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => props.navigation.navigate('List', { productCategory: item })}
          >
            <View style={styles.itemStyle}> 
              <Text style={styles.itemTextStyle} numberOfLines={2}>{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Category;
