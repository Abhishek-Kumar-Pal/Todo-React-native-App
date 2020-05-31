import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import GoalItem from './GoalItem';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const Pending = props => {
  const courseGoalsAll = useSelector(state => state.todos.goals);
  let courseGoals = courseGoalsAll.filter(goal => {
    if (goal.status === 'Pending') {
      return true;
    }
    else {
      return false;
    }
  });

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
        <Text style={styles.text}>Pending Todos</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => itemData.item.status === 'Pending' ? <GoalItem
            id={itemData.item.id}
            onDetails={onDetailsHandler}
            title={itemData.item.title} /> : <GoalItem
              id={itemData.item.id}
              onDetails={onDetailsHandler}
              title='' />}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
};

Pending.navigationOptions = navData => {
  return {
    headerTitle: 'Pending',
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
    marginTop: 35,
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

export default Pending;