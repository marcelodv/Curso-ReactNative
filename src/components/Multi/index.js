import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../GlobalStyles'

export default function Comp() {
    return <Text style={GlobalStyles.txtH2}>Comp #Oficial</Text>
}

export function Comp1() {
    return <Text style={GlobalStyles.txtH3}>Comp #01</Text>
}

export function Comp2() {
    return <Text style={GlobalStyles.txtH3}>Comp #02</Text>
}

// export { Comp1, Comp2 }