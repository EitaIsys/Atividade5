import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const CardMusic = ({index, duration, title}) => {
  return(
    <View style={styles.tracks}>
      <Text >{`${index}. [${duration}] - ${title}`}</Text>
    </View>  
  )
}
const styles = StyleSheet.create({
  tracks:{
    marginBottom: '6%',
  }, 
});

export default CardMusic;