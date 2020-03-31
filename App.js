import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import FilteredProductsScreen from './src/screens/FilteredProductsScreen';
import ProductViewScreen from './src/screens/ProductViewScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import PaymentmodeScreen from './src/screens/PaymentmodeScreen';
import OrderConfirmedScreen from './src/screens/OrderConfirmedScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {navigationRef} from './src/navigationRef';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CartFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={CheckoutScreen} />
      <Stack.Screen name="PaymentMethod" component={PaymentmodeScreen} />
      <Stack.Screen name="OrderConfirmed" component={OrderConfirmedScreen} />
    </Stack.Navigator>
  );
}

function Products() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductsHome" component={ProductsScreen} />
      <Stack.Screen name="ProductView" component={ProductViewScreen} />
    </Stack.Navigator>
  );
}

function Shop() {
  return (
    <NavigationContainer ref={navigationRef} independent={true}>
      <AuthProvider>
        <Drawer.Navigator initialRouteName="Products">
          <Drawer.Screen name="Products" component={Products} />
          <Drawer.Screen name="Account" component={ProfileScreen} />
        </Drawer.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
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
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
