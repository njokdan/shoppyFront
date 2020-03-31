import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as ProductsContext} from '../context/ProductsContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({route, navigation}) => {
  const {id} = route.params;

  const {state} = useContext(ProductsContext);

  const item = state.find(product => {
    if (product._id === id) {
      return product;
    }
  });

  console.log(item);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.pictures.pic1}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text>{item.title}</Text>
      <Text style={styles.buttonTitle}>${item.price}</Text>
      <Button title="Add to cart" containerStyle={styles.buttonContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  buttonContainer: {width: 0.8 * windowWidth, marginBottom: 30},
  buttonTitle: {marginBottom: 10, marginTop: 10},
  image: {height: '80%', width: '90%', marginLeft: 15, marginRight: 15},
});
