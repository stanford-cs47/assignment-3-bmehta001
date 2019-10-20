/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, Button, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Keyboard } from 'react-native';
import { Metrics, Colors } from '../Themes';
import { robotoWeights } from 'react-native-typography';

const { width, height } = Dimensions.get('window')

export default function Search(props) {
  const [value, onChangeText] = React.useState("Search for News");
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput, styles.marginBox]}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <TouchableOpacity style={styles.marginBox} onPress={value=> this.props.searchFunction, () => onChangeText("Search for News")}>
        <FontAwesome name="search" size={32} color="pink" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    flexDirection: "row",
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    width: 0.9 * width,
  },
  // button:{
  //   flex: 1,
  //   width,
  //   resizeMode: "contain",
  // },
  textInput: {
    alignItems: "flex-start",
    height: 0.03 * height,
    width: 0.75 * width,
    color: 'black',
  },
  marginBox: {
    marginHorizontal: 10,
  }
});