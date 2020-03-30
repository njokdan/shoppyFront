import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text h1>Shoppy</Text>
      <View>
        <Button title="Sign in" />
        <Button title="Sign up" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'space-around'},
});

export default WelcomeScreen;
