import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import GoalItem from '../components/GoalItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';

const Home = props => {
    const courseGoals = useSelector(state => state.todos.goals);

    const onDetailsHandler = (id) => {
        props.navigation.navigate({
            routeName: 'Details',
            params: {
                id: id
            }
        });
    };

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.text}>All Todos</Text>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={itemData => <GoalItem
                        id={itemData.item.id}
                        onDetails={onDetailsHandler}
                        title={itemData.item.title} />}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        </View>
    );
};

Home.navigationOptions = navData => {
    return {
        headerTitle: 'Home',
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
    screen: {
        flex: 1
    },
    header:
    {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20
    },
    text:
    {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: Colors.primaryNew
    },
    listContainer:
    {
        paddingTop: 10,
        paddingHorizontal: 20
    }
});

export default Home;