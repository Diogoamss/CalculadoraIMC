import { Text, StyleSheet } from "react-native";

const Title = () => {
    return(

        <Text Style={styles.Title}>Calculadora de IMC</Text>
    );

};

const styles = StyleSheet.create({
    Title : {

        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
});

export default Title;
