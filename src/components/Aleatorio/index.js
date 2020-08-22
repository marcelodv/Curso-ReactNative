import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../GlobalStyles'

export default (props) => {
    const randomNumber = Math.floor(Math.random() * (props.max - props.min) + props.min);
  return (
      <>
        <View>
            <Text style={GlobalStyles.txtH3}>
                O número aleatório entre {props.min} e {props.max} é: {randomNumber} 
            </Text>
        </View>
      </>
  )
}