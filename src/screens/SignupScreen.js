import React, {useState, useContext} from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignupScreen = ({navigation}) => {
  const [cred, setCred] = useState({email: '', password: ''});
  const [err, setErr] = useState('');
  const {signup} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text h1>Sign up</Text>
      <Input
        placeholder="email"
        value={cred.email}
        onChangeText={newEmail => setCred({...cred, email: newEmail})}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input
        placeholder="password"
        value={cred.password}
        onChangeText={newPassword => setCred({...cred, password: newPassword})}
        secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button
        title="Sign up"
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        onPress={() => {
          signup(cred);
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text>Already have a user? Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'space-around'},
  buttonContainer: {width: 0.8 * windowWidth, marginBottom: 30},
  buttonTitle: {marginBottom: 10, marginTop: 10},
});

export default SignupScreen;
