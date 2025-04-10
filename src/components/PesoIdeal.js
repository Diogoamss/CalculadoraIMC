import React from "react";
import { Text, StyleSheet, View } from "react-native";

//
const PesoIdeal = ({altura}) => {
    if (!altura){
        return null;
    }
    const alturaMetros = parseFloat(altura)/100;
    const min = 18.5 * (alturaMetros * alturaMetros)
    const max = 24.9 * (alturaMetros * alturaMetros)

    return (
        <View>
            <Text style={styles.Text}>peso ideal Minimo: {min.toFixed(2)}</Text>
            <Text style={styles.Text}>peso ideal Maximo: {max.toFixed(2)}</Text>
        </View>
    );


}


const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
        color: '#444'
    },

});

export default PesoIdeal;