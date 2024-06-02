import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const ImageContainer = () => {
  const images = [
    { id: 1, source: require('./images/cook.jpg') },
    { id: 2, source: require('./images/study.jpg') },
    { id: 3, source: require('./images/code.jpg') },
    { id: 4, source: require('./images/exercise.jpg') },
    { id: 5, source: require('./images/boxing.jpg') },
    { id: 6, source: require('./images/gaming.jpg') },
    { id: 7, source: require('./images/movie.jpg') },
    { id: 8, source: require('./images/podcast.jpg') },
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
    paddingTop:20
  },
  image: {
    width: 200,
    height: 200, 
    margin: 5,
  },
});

export default ImageContainer;
