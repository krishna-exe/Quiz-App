import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

const Result = ({navigation, route}) => {
  const {score} = route.params;

  const resultBanner =
    score > 30
      ? score > 80
        ? 'https://img.freepik.com/free-vector/employees-celebrating-business-success-with-huge-trophy_1150-37475.jpg?w=996&t=st=1673003330~exp=1673003930~hmac=cccdb082176f3034f7e64072959c6aed9ea60902f4ba12865aa6e0a2ea2af7c5'
        : 'https://img.freepik.com/free-vector/men-success-laptop-relieve-work-from-home-computer-great_10045-646.jpg?w=740&t=st=1672994674~exp=1672995274~hmac=51d5dd7ad1a45eef4f90cbdd5e482853a431ef76e7792f10bdd2d5f28ed4cd5b'
      : 'https://img.freepik.com/free-vector/angry-evil-office-manager-front-computer-workplace-annoyed-businessman-with-hand-grabbed-head_575670-567.jpg?w=996&t=st=1672994443~exp=1672995043~hmac=29882fc5cfb17d45396aa08be89a7dbddf6e2d35212dcb302e0b57d2c153e7ef';
  return (
    <View style={{backgroundColor: '#00132D', height: '100%'}}>
      <View
        style={{
          marginTop: 60,
          backgroundColor: 'white',
          width: '80%',
          alignSelf: 'center',
          borderRadius: 30,
        }}>
        <Text
          style={{
            color: '#0073C2',
            fontSize: 55,
            fontWeight: '600',
            textAlign: 'center',
          }}>
          Your Score:
        </Text>
        <Text
          style={{
            marginTop: 0,
            color: '#0073C2',
            fontSize: 50,
            alignSelf: 'center',
            paddingBottom: 10,
          }}>
          {score}/100
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: resultBanner,
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.butText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderRadius: 16,
            width: '90%',
            padding: 16,
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 60,
          }}>
          <Text
            onPress={() => {
              navigation.navigate('Feedback');
            }}
            style={{
              fontSize: 20,
              color: 'white',
              textDecorationLine: 'underline',
            }}>
            Feedback
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
    borderRadius: 200,
  },

  imageContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Result;
