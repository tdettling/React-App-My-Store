import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import   { NavigationIndependentTree} from '@react-navigation/native';


import Category from '../../Screens/Category';
import ProductList from '../../Screens/ProductList';
import AddProduct from '../../Screens/AddProduct';
import ProductDetails from '../../Screens/ProductDetails';
import EditProduct from '../../Screens/EditProduct';
import { AntDesign } from '@expo/vector-icons';

//import { ProductProvider } from '../../Context/ProductContext'
import { Provider } from 'react-redux';
import { ProductStore } from '../../Store/ProductStore'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='ProductCategories'>
        <Stack.Screen 
          name = 'ProductCategories' 
          component = {Category} 
          options = {{ title : 'Type of Products' }}/>

          <Stack.Screen name = 'Add' component = {AddProduct} />
          <Stack.Screen name = 'Edit' component = {EditProduct} />
          <Stack.Screen 
            name = 'List' 
            component = {ProductList} />
          <Stack.Screen name = 'Details' component = {ProductDetails} />

        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default () => {
  return (
    <Provider store={ProductStore}> 
      <App/>
    </Provider>
  )
}
