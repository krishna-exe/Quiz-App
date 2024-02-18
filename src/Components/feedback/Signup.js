import React, { useState, useEffect } from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
import axios from "axios";

const Signup = props => {

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Thoughts, setThoughts] = useState("");
  const [Suggestions, setSuggestions] = useState("");

  const [IsSubmit, setIsSubmit] = useState(false);

  useEffect (() => {
    const store = async() => {
      axios
      .post("LINK OF PHP/MYSQL",
      JSON.stringify({
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Contact: Contact,
        Thoughts: Thoughts,
        Suggestions: Suggestions,
      }))
      .then((response)=>{
        console.log(response.data);
        setIsSubmit(false); //To navigate user based on Response
      })
      .catch((err) => {
        console.log(err);
      });
    };
    if (IsSubmit) store();
  }, [IsSubmit]);

  const FirstNameHandler = (text) => {
    setFirstName(text);
  };



  return (
    <Background>
      <View style={{alignItems: 'center', width: 400}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
            alignItems: 'center',
          }}>
          Feedback
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
            alignItems: 'center',
          }}>
          Tell us how you felt using our app
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 400,
            borderTopLeftRadius: 0,
            paddingTop: 50,
            alignItems: 'center',
            alignSelf:'center',
            alignContent:'center',
            
          }}>
          <Field style={{color:'black'}}
          placeholder="First Name"
          onChangeText={FirstNameHandler}
          />
          <Field 
          placeholder="Last Name"
          onChangeText={(text)=>setLastName(text)}
          />
          <Field
            placeholder="Email Id"
            keyboardType={'email-address'}
            onChangeText={(text)=>setEmail(text)}
          />
          <Field 
          placeholder="Contact Number" 
          keyboardType={'number'} 
          onChangeText={(text)=>setContact(text)}
          />
          <Field 
          placeholder="Your Thoughts" 
          onChangeText={(text)=>setThoughts(text)}
          />
          <Field 
          placeholder="Your Suggestions" 
          onChangeText={(text)=>setSuggestions(text)}
          />

          
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Submit"
            Press={() => {
              setIsSubmit(true);
              alert('Your Feedback has been submitted');
              props.navigation.navigate('Home');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
           

            <TouchableOpacity
              onPress={() => props.navigation.navigate('Home')}>
              <Text
                style={{color: "#14213D", textDecorationLine: 'underline', fontWeight: 'bold', fontSize: 16}}>
                Go to Home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
