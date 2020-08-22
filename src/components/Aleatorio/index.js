import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../GlobalStyles'

export default ({ min, max }) => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return (
      <>
        <View>
            <Text style={GlobalStyles.txtH3}>
                O número aleatório entre {min} e {max} é: {randomNumber} 
            </Text>
        </View>
      </>
  )
}