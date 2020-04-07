import React, {useContext, useEffect} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export default () => {
  const {tryLocalSignin} = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
