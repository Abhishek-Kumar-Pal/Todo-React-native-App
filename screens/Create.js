import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableWithoutFeedback, Alert, Keyboard } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { add } from '../store/actions/todoaction';
import { useDispatch } from 'react-redux';
import Colors from '../constants/Colors';

const Create = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');

    const dispatch = useDispatch();

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    const titleInputHandler = enteredText => {
        setEnteredTitle(enteredText);
    };

    const onAddHandler = () => {
        if (enteredGoal === '' || enteredTitle === '') {
            Alert.alert(
                'Enter Text!',
                'Both Title and Todo must be present.',
                [{ text: 'Okay', style: 'destructive', onPress: onCancelHandler }]
            );
            return;
        }
        const item = {
            id: Math.random().toString(),
            value: enteredGoal,
            status: 'Pending',
            title: enteredTitle
        };
        dispatch(add(item));
        setEnteredGoal('');
        setEnteredTitle('');
        Keyboard.dismiss();
    };

    const onCancelHandler = () => {
        setEnteredGoal('');
        setEnteredTitle('');
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.inputContainer}>
                <View style={styles.header}>
                    <Text style={styles.text}>Create A Todo</Text>
                </View>
                <TextInput placeholder="Title" style={styles.input}
                    onChangeText={titleInputHandler} value={enteredTitle} />
                <TextInput placeholder="ToDo" style={styles.input}
                    onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={onCancelHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPress={onAddHandler} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

Create.navigationOptions = navData => {
    return {
        headerTitle: 'Create',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    };
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

    header:
    {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },

    text:
    {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: Colors.primaryNew
    },

    button: {
        width: '40%', color: 'black'
    }
});

export default Create;