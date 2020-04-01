import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import ProductViewScreen from './src/screens/ProductViewScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import PaymentmodeScreen from './src/screens/PaymentmodeScreen';
import OrderConfirmedScreen from './src/screens/OrderConfirmedScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as ProductsProvider} from './src/context/ProductsContext';
import {navigationRef, navigate} from './src/navigationRef';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerActions} from '@react-navigation/native';
import {Provider as CartProvider} from './src/context/CartContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Products({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsHome"
        component={ProductsScreen}
        options={{
          headerTitle: 'Products',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="bars" size={30} style={{marginLeft: 20}} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Icon name="shopping-cart" size={30} style={{marginRight: 20}} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductView"
        component={ProductViewScreen}
        options={{
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="bars" size={30} style={{marginLeft: 20}} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Icon name="shopping-cart" size={30} style={{marginRight: 20}} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CheckoutScreen}
        options={{
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="bars" size={30} style={{marginLeft: 20}} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentmodeScreen}
        options={{
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="bars" size={30} style={{marginLeft: 20}} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Icon name="shopping-cart" size={30} style={{marginRight: 20}} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="OrderConfirmed"
        component={OrderConfirmedScreen}
        options={{
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="bars" size={30} style={{marginLeft: 20}} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Icon name="shopping-cart" size={30} style={{marginRight: 20}} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Account({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: 'Account',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="bars" size={30} style={{marginLeft: 20}} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Shop() {
  return (
    <NavigationContainer ref={navigationRef} independent={true}>
      <AuthProvider>
        <Drawer.Navigator initialRouteName="Products">
          <Drawer.Screen name="Products" component={Products} />
          <Drawer.Screen name="Account" component={Account} />
        </Drawer.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signin"
                component={SigninScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Shop"
                component={Shop}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
