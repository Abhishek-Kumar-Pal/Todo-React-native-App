import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Card from '../components/Card';
import Header from '../components/Header';
import GoalInput from '../components/GoalInput';

const Profile = props => {
  const [name, setName] = useState('Enter Your Name');
  const [age, setAge] = useState('Enter Your Age');
  const [profession, setProfession] = useState('Enter Your Profession');
  const [skills, setSkills] = useState('Enter Your Skills');
  const [isUpdate, setIsUpdate] = useState(false);

  const addCancelHandler = () => {
    setIsUpdate(false);
  };

  const addUpdateHandler = (Name,Age,prof,skill) => {
    setName(Name);
    setAge(Age);
    setProfession(prof);
    setSkills(skill);
    setIsUpdate(false);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.container}>
        <Header title={name} />
        <View style={styles.textContainer}>
          <View style={styles.valueOuter}>
            <Text style={styles.textOuter}>Age</Text>
          </View>
          <View style={styles.valueInner}>
            <Text style={styles.textInner}>{age}</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.valueOuter}>
            <Text style={styles.textOuter}>Profession</Text>
          </View>
          <View style={styles.valueInner}>
            <Text style={styles.textInner}>{profession}</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.valueOuter}>
            <Text style={styles.textOuter}>Skills</Text>
          </View>
          <View style={styles.valueInner}>
            <Text style={styles.textInner}>{skills}</Text>
          </View>
        </View>
        <View>
          <Button title="Update Your Profile" color="orange" onPress={() => setIsUpdate(true)} />
          <GoalInput
            visible={isUpdate}
            onUpdate={addUpdateHandler}
            onCancel={addCancelHandler}
            name={name}
            age={age}
            profession={profession}
            skills={skills}
          />
        </View>
      </Card>
    </View >
  );
};

Profile.navigationOptions = navData => {
  return {
    headerTitle: 'Profile',
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

  valueOuter:
  {
    marginVertical: 50,
    width: '30%'
    // marginHorizontal: 30
  },

  textOuter:
  {
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
    fontSize: 20
  },

  valueInner:
  {
    marginVertical: 50,
    width: '50%'
    // marginHorizontal: 30
  },

  textInner:
  {
    textAlign: 'center',
    fontFamily: 'open-sans',
    fontSize: 18
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default Profile;