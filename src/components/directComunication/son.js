import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../GlobalStyles'

const directComunication = (props) => {
    return (
        <View>
            <Text style={GlobalStyles.txtH1}>{props.a}</Text>
            <Text style={GlobalStyles.txtH1}>{props.b}</Text>
        </View>
    );
}

export default directComunication;