import React, {useState, useContext} from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SigninScreen = ({navigation}) => {
  const [cred, setCred] = useState({email: '', password: ''});
  const [err, setErr] = useState('');
  const {signin} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text h1>Sign in</Text>
      <Input
        placeholder="email"
        value={cred.email}
        onChangeText={newEmail => setCred({...cred, email: newEmail})}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input
        placeholder="password"
        secureTextEntry={true}
        value={cred.password}
        onChangeText={newPassword => setCred({...cred, password: newPassword})}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button
        title="Sign in"
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        onPress={() => {
          signin(cred);
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'space-around'},
  buttonContainer: {width: 0.8 * windowWidth, marginBottom: 30},
  buttonTitle: {marginBottom: 10, marginTop: 10},
});

export default SigninScreen;
