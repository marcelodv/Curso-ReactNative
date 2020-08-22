import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../GlobalStyles'

export default props => { 
    return (
        <>
            <View>
                <Text style={GlobalStyles.txtH3}>
                    {/* Indicando qual a propriedade em específico que deseja inserir na string */}
                    O valor {props.max} é maior do que o valor {props.min}
                </Text>
            </View>
        </>
    );
}