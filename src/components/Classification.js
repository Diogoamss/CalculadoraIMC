import React from "react";
import { Text, StyleSheet } from "react-native";

const classification = ({imc})=>{

    if (!imc) return null;

    let message = '';

    const value = parseFloat(imc);
    if(value < 18.5){
        message = 'Abaixo do peso!';
    }else if(value < 24.9){
        message = 'peso normal';
    }else if(value < 29.9){
        message = 'acima do peso!';
    }else if(value < 34.9){
        message = 'obesidade grau I';
    }else if(value < 39.9){
        message = 'obesidade grau II';
    }else{
        message = 'obesidade grau III';
    }

    return <Text style={styles.Text}>Classificação: {message} </Text>
};

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
        color: '#444',
    },
});



export default classification;