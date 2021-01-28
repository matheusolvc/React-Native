import React from 'react';

import { View, Text, StyleSheet } from 'react-native';


function Caps({text}) {
  
  return (
    <View>
      <Text>{text.toUpperCase()}</Text>
      <Text></Text>
    </View>
  );
}

export default Caps



