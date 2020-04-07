import React from 'react';

//Components
import HeaderIcon from './src/components/HeaderIcon';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {navigationRef, navigate} from './src/navigationRef';

//Screens
import {
  WelcomeScreen,
  SigninScreen,
  SignupScreen,
  ProductViewScreen,
  ProfileScreen,
  CheckoutScreen,
  PaymentmodeScreen,
  OrderConfirmedScreen,
  ProductsScreen,
  ResolveAuthScreen,
} from './src/screens/Screens';

//Providers
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as ProductsProvider} from './src/context/ProductsContext';
import {Provider as CartProvider} from './src/context/CartContext';

//Navigation Initializors
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Defaults
const defaultHeaderNavigators = (navigation) => ({
  headerTitle: 'Products',
  headerTitleAlign: 'center',
  headerLeft: () => (
    <HeaderIcon
      navigationAction={() => navigation.openDrawer()}
      iconName="bars"
      styles={{marginLeft: 20}}
    />
  ),
  headerRight: () => (
    <HeaderIcon
      navigationAction={() => navigation.navigate('Cart')}
      iconName="shopping-cart"
      styles={{marginRight: 20}}
    />
  ),
  headerTitle: '',
});

//Products Navigator
function Products({navigation}) {
  return (
    <Stack.Navigator screenOptions={defaultHeaderNavigators(navigation)}>
      <Stack.Screen
        name="ProductsHome"
        component={ProductsScreen}
        options={{
          headerTitle: 'Products',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="ProductView" component={ProductViewScreen} />
      <Stack.Screen
        name="Cart"
        component={CheckoutScreen}
        options={{
          headerRight: () => null,
          headerTitle: 'Cart',
        }}
      />
      <Stack.Screen name="PaymentMethod" component={PaymentmodeScreen} />
      <Stack.Screen name="OrderConfirmed" component={OrderConfirmedScreen} />
    </Stack.Navigator>
  );
}

//Account screen
function Account({navigation}) {
  return (
    <Stack.Navigator screenOptions={defaultHeaderNavigators(navigation)}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: 'Account',
          headerTitleAlign: 'center',
          headerRight: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

//Shop navigator
function Shop() {
  return (
    <NavigationContainer independent={true}>
      <AuthProvider>
        <Drawer.Navigator initialRouteName="Products">
          <Drawer.Screen name="Products" component={Products} />
          <Drawer.Screen name="Account" component={Account} />
        </Drawer.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

//Opening navigator
function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="CheckToken"
                component={ResolveAuthScreen}
                options={{headerShown: false}}
              />
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
