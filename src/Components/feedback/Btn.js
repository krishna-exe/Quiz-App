import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: '#EB5E28',
        borderRadius: 100,
        alignItems: 'center',
        width: 200,
        paddingVertical: 5,
        marginVertical: 10,
        marginBottom: 20,
      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
