import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

class Intro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TitleStyle}>Quiz App</Text>
        
        <View style={styles.imageContainer}>
          <Image
            source={require('../Images/Logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Choices');
          }}
          style={styles.button}>
          <Text style={styles.butText}>Start Quiz</Text>
        </TouchableOpacity>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TitleStyle: {
    fontSize: 55,
    color: '#fca311',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 1000,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
	marginTop: 90,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#14213D',
  },
  button: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 16,
    width: '90%',
    backgroundColor: '#EB5E28',
    padding: 16,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  butText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Intro;
