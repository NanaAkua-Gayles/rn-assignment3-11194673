import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonList = () => {
  
  const buttons = [
    { id: 1, label: 'Mobile App Development', onPress: () => console.log('Button 1 pressed') },
    { id: 2, label: 'Web Development', onPress: () => console.log('Button 2 pressed') },
    { id: 3, label: 'Push Ups', onPress: () => console.log('Button 3 pressed') },
    { id: 4, label: 'Cooking', onPress: () => console.log('Button 4 pressed') },
    { id: 5, label: 'Gaming', onPress: () => console.log('Button 5 pressed') },
    { id: 6, label: 'Making a Podcast', onPress: () => console.log('Button 6 pressed') },
    { id: 7, label: 'Listen to Music', onPress: () => console.log('Button 7 pressed') },
    { id: 8, label: 'Database Management', onPress: () => console.log('Button 8 pressed') },
    { id: 9, label: 'Presentations', onPress: () => console.log('Button 9 pressed') },
    { id: 10, label: 'Online Meeting Links', onPress: () => console.log('Button 10 pressed') },
    { id: 11, label: 'Attendance Records', onPress: () => console.log('Button 11 pressed') },
    { id: 12, label: 'Student Results', onPress: () => console.log('Button 12 pressed') },
    { id: 13, label: 'Timetable', onPress: () => console.log('Button 13 pressed') },
    // Add more buttons as needed
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {buttons.map(button => (
          <TouchableOpacity key={button.id} onPress={button.onPress} style={styles.button}>
            <Text style={styles.buttonText}>{button.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '100%',
  },
  button: {
    padding: 30,
    margin: 5,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    
  },
  buttonText: {
    fontSize: 18,
  },
});

export default ButtonList;
