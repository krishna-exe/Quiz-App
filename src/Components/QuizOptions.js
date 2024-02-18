import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import ModalDropdown from 'react-native-modal-dropdown';

class Category extends Component {
  state = {
    CategorySelected: "",
    DifficultySelected: "",
  };

  //Categories
  render() {
    const Categories = [
      "Any Category",
      "General Knowledge",
      "Movies",
      "Books",
      "Music",
      "Musicals and Theaters",
      "Television",
      "Video Games",
      "Board Games",
      "Science & Nature",
      "Computer Science",
      "Mathematics",
      "Mythology",
      "Geography",
      "History",
      "Politics",
      "Art",
      "Celebreties",
      "Animals",
      "Vehicles",
      "Comics",
      "Gadgets",
      "Japanese Anime",
      "Cartoon and Animations",
    ];

    //Difficulties
    const Difficulties = ["Any Difficulty", "Easy", "Medium", "Hard"];
    return (
      <View style={styles.MainStyle}>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "black" }}>
          <Text style={styles.TitleStyle}>Select</Text>
        </View>
        <Text style={[styles.TextStyle, { marginTop: 20 }]}>Category</Text>
        <ModalDropdown
          options={Categories}
          defaultValue={Categories[0]}
          defaultIndex={0}
          showsVerticalScrollIndicator={true}
          style={styles.DropDownButtonStyle}
          textStyle={styles.DropDownButtonTextStyle}
          dropdownStyle={styles.DropDownStyle}
          dropdownTextStyle={styles.DropDownTextStyle}
          dropdownTextHighlightStyle={styles.SelectedTextStyle}
          onSelect={(index, value) => {
            this.setState({ CategorySelected: value });
          }}
        />
        <Text style={styles.TextStyle}>Difficulty</Text>
        <ModalDropdown
          options={Difficulties}
          defaultValue={Difficulties[0]}
          defaultIndex={0}
          showsVerticalScrollIndicator={true}
          style={styles.DropDownButtonStyle}
          textStyle={styles.DropDownButtonTextStyle}
          dropdownStyle={styles.DropDownStyle}
          dropdownTextStyle={styles.DropDownTextStyle}
          dropdownTextHighlightStyle={styles.SelectedTextStyle}
          onSelect={(index, value) => {
            this.setState({ DifficultySelected: value });
          }}
        />
        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() => {
            this.props.navigation.navigate("Quiz", {
              Category: this.state.CategorySelected,
              Difficulty: this.state.DifficultySelected,
            });
          }}
        >
          <Text
            style={[
              styles.TextStyle,
              {
                color: "#2acb75",
                marginBottom: 0,
                paddingTop: 20,
                paddingBottom: 20,
              },
            ]}
          >
            Begin Quiz
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainStyle: {
    backgroundColor: '#14213D',
    flex: 1,
  },
  TitleStyle: {
    fontSize: 60,
    color: '#fca311',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  TextStyle: {
    alignSelf: 'center',
    color: '#e5e5e5',
    fontSize: 35,
    marginBottom: 25,
    fontWeight: 'bold',
  },
  DropDownButtonStyle: {
    borderColor: '#EB5E28',
    alignSelf: 'center',
    borderRadius: 30,
    borderWidth: 2,
    width: '70%',
    alignItems: 'center',
    marginBottom: 40,
  },
  DropDownButtonTextStyle: {
    fontSize: 20,
    color: 'white',
    padding: 10,
  },
  DropDownStyle: {
    alignSelf: 'center',
    width: 170,
  },
  DropDownTextStyle: {
    color: 'black',
    fontSize: 15,
  },
  SelectedTextStyle: {
    color: '#EB5E28',
    fontWeight: 'bold',
  },
  ButtonStyle: {
    width: '80%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#2acb75',
    borderRadius: 25,
    marginTop: 40,
  },
});

export default Category;
