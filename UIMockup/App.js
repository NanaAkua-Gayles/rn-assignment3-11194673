import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import SearchBox from "./searchbox";
import ImageContainer from './images';
import ButtonList from './buttonlist';


export default function App() {
return (
  <View style = {styles.container}>
    <Header/>
    <SearchBox/>
    <Text style={{fontWeight:"bold"}}>Categories</Text>
    <ImageContainer/> 
    <ButtonList/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD0',
    paddingTop: 30,
    

  },
});
