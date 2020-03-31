import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Button, Text} from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text h1>Shoppy</Text>
      <View>
        <Button
          title="Sign in"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('Signin')}
        />
        <Button
          title="Sign up"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          type="outline"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'space-around'},
  buttonContainer: {width: 0.8 * windowWidth, marginBottom: 30},
  buttonTitle: {marginBottom: 10, marginTop: 10},
});

export default WelcomeScreen;
