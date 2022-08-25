import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const BtnCalculator =  ({ onPress, text, size, theme }) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if (size === "double") {
        buttonStyles.push(styles.buttonDouble);
    }
    if (theme === "accent") {
        buttonStyles.push(styles.buttonAccent);
    }

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    );
};

export default BtnCalculator;


const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 25
    },
    button: {
        backgroundColor: "blue",
        flex: 1,
        height: 90,
        alignItems: "center",
        justifyContent: "center",
        margin: 5
    },
    buttonDouble: {
        width: 70,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40
    },
    buttonAccent: {
        backgroundColor: "red"
    }
});