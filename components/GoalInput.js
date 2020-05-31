import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredName, setEnteredName] = useState(props.name);
    const [enteredAge, setEnteredAge] = useState(props.age);
    const [enteredProfession, setEnteredProfession] = useState(props.profession);
    const [enteredSkills, setEnteredSkills] = useState(props.skills);

    const nameInputHandler = enteredText => {
        setEnteredName(enteredText);
    };

    const ageInputHandler = enteredText => {
        setEnteredAge(enteredText);
    };

    const professionInputHandler = enteredText => {
        setEnteredProfession(enteredText);
    };

    const skillsInputHandler = enteredText => {
        setEnteredSkills(enteredText);
    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Name" style={styles.input}
                    onChangeText={nameInputHandler} />
                <TextInput placeholder="Age" style={styles.input}
                    onChangeText={ageInputHandler} />
                <TextInput placeholder="Profession" style={styles.input}
                    onChangeText={professionInputHandler} />
                <TextInput placeholder="Skills" style={styles.input}
                    onChangeText={skillsInputHandler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Update" onPress={props.onUpdate.bind(this, enteredName,enteredAge,enteredProfession,enteredSkills)} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        margin: 10
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-around'
    },

    button: {
        width: '40%'
    }
});

export default GoalInput; 