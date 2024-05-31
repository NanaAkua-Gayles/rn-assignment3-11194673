import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
        <View>
      <Text style={{fontSize: 22 , fontWeight: 'bold',}}>Hello, Devs</Text> 
      <Text>14 tasks today</Text>
      </View>
      <Image
        source={require('.dev/logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    logo: {
      width: 50,
      height: 100,
    },
  });
  
  export default Header;