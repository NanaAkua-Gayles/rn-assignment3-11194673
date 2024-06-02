import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const SearchBox = () =>{
    return(
        <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Search..."
        />
        <Image
        source={require('./images/devlogo.jpg')}
        style={styles.icon}
      />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
      },
     icon: {
    width: 50,
    height: 50,
    marginLeft: 5,
  },
});
export default SearchBox;