import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Searchbox from './searchbox';

export default function App() {
return (
  <View style = {styles.container}>
    <Header/>
  <Searchbox/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
  },
});
