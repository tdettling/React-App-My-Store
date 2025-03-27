import { Text, View, TouchableOpacity, Image, ScrollView  } from 'react-native'
import { useContext, useLayoutEffect } from 'react'
import styles from '../styles'
import { AntDesign, Feather } from '@expo/vector-icons';


const ProductDetails = (props) => {

    const Product = props.route.params.productItem;

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight : () => {
                return (
                    <TouchableOpacity onPress={ () => {props.navigation.navigate('Edit', {productItem: Product})}}>
                    <Feather name="edit" size={24} color="black" />
                    </TouchableOpacity>
                )
            }
        });
      }, []);

      return (
        <View style={styles.screenContainer}> 
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Large Bold Product Name */}
                <Text style={styles.productTitle}>{Product.name}</Text>
    
                {/* Product Image */}
                <Image style={styles.imgStyle} source={Product.prodImage} />
    
                {/* Smaller Product Name */}
                <Text style={styles.productSubTitle}>{Product.name}</Text>
    
                {/* Price */}
                <Text style={styles.priceText}>${Product.price.toFixed(2)}</Text>
    
                {/* Rating and Review Count Side by Side */}
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>⭐ {Product.rating}</Text>
                    <Text style={styles.reviewText}>({Product.reviewCount} Reviews)</Text>
                </View>
    
                {/* Product Description */}
                <Text style={styles.productDesc}>{Product.desc}</Text>
            </ScrollView>
        </View>
    );
    
    
};

export default ProductDetails;