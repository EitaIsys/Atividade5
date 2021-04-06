import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import from local files
import Header from './src/screens/Modal/index';
import AlbumList from './src/screens/AlbumList/index'; 
// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

function App() {
  return (
    <View style={styles.container}>
      {/*<Header></Header>*/}
      <AlbumList></AlbumList>
    </View>
    
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
