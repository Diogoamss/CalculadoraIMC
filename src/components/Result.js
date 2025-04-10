import React from "react";
import { Text, StyleSheet } from "react-native";

const Result = ({imc}) => {
    return(
        <text style={style.Result}>Seu IMC é: (imc)</text>

    );
};

const style = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default Result;