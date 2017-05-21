
'use strict';

import { StyleSheet } from "react-native";
var React = require('react-native');
var { Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
module.exports = StyleSheet.create({
   
    aSrcdes: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    iosSrcdes: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    
  slideSelector: {
    backgroundColor: '#eee',
    position: 'absolute',
    bottom: 0,
    width: deviceWidth
  }, 
  
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  tripBtn: {
    backgroundColor: '#C61100',
    height: 60
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 25
  },
  headerContainer: {
    position: 'absolute', 
    top: 0, 
    flex:1, 
    width: deviceWidth
 },
 iosHeader: {
    backgroundColor: '#19192B'
 },
 aHeader: {
    backgroundColor: '#19192B',
    borderColor: '#aaa',
    elevation: 3,
    paddingTop: 25
 }, 
 iosHeaderTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center'
 },
 aHeaderTitle: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
    marginTop: -5,
    color: '#fff',
    textAlign: 'center'
 }, 
 place: {
    alignItems: 'center',
    width: deviceWidth,
    padding: 10,
    paddingVertical: 20
 },
 placeText: {
    textAlign: 'center',
    marginTop: -3,
    fontSize: 14
 }

});