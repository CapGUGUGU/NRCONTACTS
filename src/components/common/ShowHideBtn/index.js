import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const ShowHideBtn = ({secureText, setSecureText}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        secureText ? setSecureText(false) : setSecureText(true);
      }}>
      {secureText ? <Text>SHOW</Text> : <Text>HIDE</Text>}
    </TouchableOpacity>
  );
};

export default ShowHideBtn;
