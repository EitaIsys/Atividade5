import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const CardList = ({uri, artist, album}) => {
  return(
    <View style={styles.header}>
      <Image source={uri} style={styles.image}/>
      <View style={styles.details}>
        <Text style={styles.artist}>{artist}</Text>
        <Text style={styles.album}>{album}</Text>
      </View>  
    </View>  
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  artist:{
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 15,
    color: "#242424",
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 15,
  },
  album:{
    fontWeight: '500',
    fontSize: 14,
    color: "#242424",
  },
  details:{
    marginLeft: 20
  },
});

export default CardList;