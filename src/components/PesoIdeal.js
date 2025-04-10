import React from "react";
import { Text, StyleSheet } from "react-native";

const PesoIdeal = ({altura}) => {
    if (!altura){
        return null;
    }

    const alturaMetros = parseFloat(altura)/ 100;
    const min = (18.5 * alturaMetros * alturaMetros);
    const max = (24.9 * alturaMetros * alturaMetros);

    return (
        <Text style={styles.text}>
            Peso ideal entre {min} kg e {max} kg
        </Text>
    );

};

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
        color: '#444'
    },

});

export default PesoIdeal;