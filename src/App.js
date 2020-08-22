import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

// import Primeiro from './components/Primeiro'
// Multiplos Components ( Não recomendado )
// import Oficial, { Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Buttons from './components/Button'
import Contador from './components/Contador'


export default  () => {
    // console.warn("Hello, Warning Box")
    return (
        <>  
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <View style={styles.container} >
                {/* 
                    <Primeiro />
                    <Oficial />
                    <Comp1 />
                    <Comp2 /> 
                    Passando parametros pelo componente 
                    "Exemplo" -> Sting // {9} -> Numerico 
                    <MinMax min={3} max="30" /> 
                    <Aleatorio min={1} max={10}/>  
                    <Buttons />
                */}
                <Contador initial={0} step={10} /> 
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
})