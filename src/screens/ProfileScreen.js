import React, {useContext} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default () => {
  const {signout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Button
        title="Sign out"
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        onPress={signout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'space-around'},
  buttonContainer: {width: 0.8 * windowWidth, marginBottom: 30},
  buttonTitle: {marginBottom: 10, marginTop: 10},
});
