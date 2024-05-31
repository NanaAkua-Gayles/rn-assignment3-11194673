import React from 'react';
import { View,Image, TextInput, StyleSheet } from 'react-native';

const Searchbox = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search..."
        placeholderTextColor="gray"
      />
      <Image
        source={require('./logo.jpg')}
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
  searchBox: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingLeft: 10,
  },
  logo: {
    width: 50,
    height: 100,
  },
});

export default Searchbox;
