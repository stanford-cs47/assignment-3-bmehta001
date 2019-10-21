/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React from 'react';
import { Alert, StyleSheet, Text, TextInput, Button, Image, View, Dimensions, FlatList, SafeAreaView } from 'react-native';
import { Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'
import metrics from './App/Themes/Metrics.js'
import { Keyboard } from 'react-native';

import News from './App/Components/News'
import Search from './App/Components/Search'
import Article from './App/Components/Article';

const { width, height } = Dimensions.get('window')

export default class App extends React.Component {

  state = {
    loading: true,
    articles : [],
    searchText: '',
    category: ''
  }

  componentDidMount() {
    this.loadArticles();
  }

  async loadArticles(searchTerm = 'food', category = '') {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    // console.warn(resultArticles);
    // console.log(resultArticles);
    // Alert.alert(resultArticles);
    this.setState({loading: false, articles: resultArticles})
  }

  getArticleContent = () => {
    const {articles, loading} = this.state;

    let contentDisplated = null;

    if (loading) {
      contentDisplated = 
      <ActivityIndicator
        style = {styles.ActivityIndicator}
        size="large" color="black"/>;
    } else {
      contentDisplated = <News articles={articles}/>;
    } 

    return (
      <View style={{flex : 1}}>
        {contentDisplated}
      </View>
    )
  }

  searchFunction = value => {
    Alert.alert("This Worked");
    this.setState({searchText: value});
    this.loadArticles(this.state.searchText, '')
    value = "";
  }


  render() {
    const {articles, loading} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require('./App/Images/nyt.png')}/>
        {/* <Text style={{textAlign: 'center'}}>Have fun! :) {"\n"} Start by changing the API Key in "./App/Config/AppConfig.js" {"\n"} Then, take a look at the following components: {"\n"} NavigationButtons {"\n"} Search {"\n"} News {"\n"} 🔥</Text> */}

        {/* <News articles={articles} /> */}
        
        <Search searchFunction = {this.loadArticles}/>
        {/*Then your search bar*/}

        {/*And some news*/}
        <View style={styles.articleView}>
          <FlatList
            data={this.state.articles}
            renderItem={({item}) => 
              <Article
                byline={item.byline} 
                date={item.date} 
                snippet={item.snippet} 
                title={item.title}
                url={item.url}/>
            }
            keyExtractor={(item) => {
              return item.url
            }}
          />
        </View>

        {/*Though, you can style and organize these however you want! power to you 😎*/}

        {/*If you want to return custom stuff from the NYT API, checkout the APIRequest file!*/}

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    flex: 1,
    width,
    resizeMode: "contain",
  },
  articleView:{
    flex:10,
  },
});
