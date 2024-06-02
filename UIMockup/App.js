import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import SearchBox from "./searchbox";

export default function App() {
return (
  <View style = {styles.container}>
    <Header/>
    <SearchBox/>
    <Text style={{fontWeight:"bold"}}>Categories</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    paddingBottom: 10,
    paddingTop: 10
  },
});
