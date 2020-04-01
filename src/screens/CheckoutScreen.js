import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Context as CartContext} from '../context/CartContext';
import uid from 'uid';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({navigation}) => {
  const {state, removeItemFromCart} = useContext(CartContext);

  const [chosenProducts, setChosenProducts] = useState([]);

  useEffect(() => {
    setChosenProducts(state);
    console.log('fired');
  }, [state]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={chosenProducts}
        keyExtractor={item => item.cartId}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 15,
              marginBottom: 15,
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 0.9 * windowWidth,
            }}>
            <Image
              source={{uri: item.pictures.pic1}}
              style={{height: 70, width: 70}}
            />
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
            <Icon
              name="trash"
              size={30}
              onPress={() => {
                removeItemFromCart(item.cartId);
                setChosenProducts(state);
              }}
            />
          </View>
        )}
      />

      <Text h2>Total</Text>
      <Text style={{color: 'red', marginTop: 15}} h1>
        put sum $ here
      </Text>
      <Button
        title="CHECKOUT"
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ProductsHome')}>
        <Text>Want to shop more?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productsContainer: {
    height: 0.5 * windowHeight,
    width: windowWidth,
  },
  container: {flex: 1, alignItems: 'center'},
  buttonContainer: {width: 0.8 * windowWidth, marginBottom: 30, marginTop: 30},
  buttonTitle: {marginBottom: 10, marginTop: 10},
});
