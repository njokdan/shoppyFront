import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({navigationAction, iconName, styles = {}}) => {
  return (
    <TouchableOpacity onPress={navigationAction}>
      <Icon name={iconName} size={30} style={styles} />
    </TouchableOpacity>
  );
};
