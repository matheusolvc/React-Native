import React from 'react';

import { View, Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default function (props){
  uri=props.src;
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
                  uri: uri
                }}
      />
    </View>
  );
}






