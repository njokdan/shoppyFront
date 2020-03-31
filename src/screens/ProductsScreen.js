import React, {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Button,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {Context as ProductsContext} from '../context/ProductsContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  image: {
    height: undefined,
    width: undefined,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  product: {
    height: 250,
    width: 200,
    marginTop: 15,
    marginBottom: 25,
  },
});

export default ({navigation}) => {
  const [productList, setList] = useState({});

  const {getProducts, state} = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        columnWrapperStyle={styles.container}
        numColumns="2"
        data={state}
        keyExtractor={product => product._id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.product}
              onPress={() =>
                navigation.navigate('ProductView', {id: item._id})
              }>
              <Image
                source={{uri: item.pictures.pic1}}
                style={styles.image}
                resizeMode="contain"
              />
              <Text>{item.title}</Text>
              <Text>${item.price}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
