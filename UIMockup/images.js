import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const ImageContainer = () => {
  // Dummy data for images (replace with your actual image data)
  const images = [
    { id: 1, source: require('./images/cook.jpg') },
    { id: 2, source: require('./images/study.jpg') },
    { id: 3, source: require('./images/code.jpg') },
    // Add more images as needed
  ];

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image source={item.source} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    margin: 5,
  },
});

export default ImageContainer;
