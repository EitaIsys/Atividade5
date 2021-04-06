import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardBack = () => {
  const navigation = useNavigation(); 
  return(
    <TouchableOpacity onPress={() => {navigation.goBack()}} style={styles.borderButton}>
      <Text style={styles.textBorderButton}>Voltar</Text>
    </TouchableOpacity> 
  )
}
const styles = StyleSheet.create({
  borderButton:{
    width: '100%',
    height: 55,
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#602G2F',
    borderWidth: 3,
  },
  textBorderButton:{
    color: '#602G2F',
    fontWeight: 'bold',
    fontSize: 14
  }, 
});

export default CardBack;