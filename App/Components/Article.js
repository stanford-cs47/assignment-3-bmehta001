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
import { StyleSheet, SafeAreaView, Button, Text, TextInput, Linking, Dimensions, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Keyboard } from 'react-native';
import { Metrics, Colors } from '../Themes';
import { robotoWeights } from 'react-native-typography';

const { width, height } = Dimensions.get('window')

export default function Article(props) {
    let propsUrl = props.url;
  return (
    <SafeAreaView style={[styles.container, styles.marginBox]}>
        <Text style={[styles.font18]} onPress={() => Linking.openURL(propsUrl)}>{props.title}</Text>

        <Text style={[styles.font12]}>{props.snippet} </Text>

        <Text style={[styles.fontBold, styles.font12]}>{props.byline} </Text>

        <Text style={[styles.fontGray, styles.font10]}>{props.date} </Text>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
    width: 0.9 * width,
    margin: 8,
  },
  textInput: {
    alignItems: "flex-start",
    height: 0.03 * height,
    width: 0.75 * width,
    color: 'black',
  },
  font10: {
    fontSize: 10,
  },
  font12: {
    fontSize: 12,
  },
  font18: {
    fontSize: 18,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  fontGray: {
    color: 'gray',
  },
  marginBox: {
    marginHorizontal: 10,
  },
});