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
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'

export default class News extends Component {
  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  }

  //you can change the props above to whatever you want/need.

  render () {
    const {articles} = this.props.articles;

    return (
      <View style={styles.container}>
        {/*Some FlatList or SectionList*/}
        <FlatList
          data={articles}
          renderItem={( { item, index } ) => 
            <Text>{item}</Text>
          }
          keyExtractor={(item, index) => {
            return index.toString()
          }}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {

  },
});
