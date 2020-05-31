import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import Header from '../components/Header';
import { remove, update } from '../store/actions/todoaction';

const Details = props => {
    const [isDelete, setIsDelete] = useState(false);
    const id = props.navigation.getParam('id');
    const courseGoals = useSelector(state => state.todos.goals);
    const goal = courseGoals.find(goal => goal.id === id);

    const dispatch = useDispatch();

    const statusChangeHandler = () => {
        dispatch(update(id));
        props.navigation.navigate({
            routeName: 'Home'
        });
    };

    const deleteHandler = () => {
        dispatch(remove(id));
        props.navigation.navigate({
            routeName: 'Home'
        });
        setIsDelete(true);
    };

    if (isDelete) {
        return (
            <View style={styles.delete}>
                <Text style={styles.textDelete}>Deleted Todo</Text>
            </View>
        );
    }
    else {
        return (
            <View style={styles.screen}>
                <Card style={styles.container}>
                    <Header title={goal.title} />
                    <View style={styles.value}>
                        <Text style={styles.text}>{goal.value}</Text>
                    </View>
                    <View style={styles.status}>
                        <Text style={styles.statusText}>{goal.status}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Change Status" color="orange" onPress={statusChangeHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Delete" color="red" onPress={deleteHandler} />
                        </View>
                    </View>
                </Card>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    screen:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    container: {
        // height: '60%',
        width: '80%',
        padding: 0,
        overflow: 'hidden'
        // justifyContent: 'center',
        // alignItems: 'center'
    },

    delete: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textDelete: {
        fontFamily: 'open-sans',
        fontSize: 22
    },

    status: {
        marginTop: 20,
        marginBottom: 30,
        marginHorizontal: 40
    },

    buttonContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 50
    },
    button: {
        width: '40%'
    },
    value:
    {
        marginVertical: 50,
        marginHorizontal: 30
    },
    text:
    {
        textAlign: 'center',
        fontFamily: 'open-sans',
        fontSize: 16
    },

    statusText: {
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
});

Details.navigationOptions = navigationData => {
    return {
        headerTitle: 'Details'
    };
};

export default Details;