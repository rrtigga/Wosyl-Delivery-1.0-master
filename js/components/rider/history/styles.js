
'use strict';

import { StyleSheet } from "react-native";
var React = require('react-native');
var { Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
module.exports = StyleSheet.create({
    

  iosHeader: {
    backgroundColor: '#fff',
  },
  aHeader: {
    backgroundColor: '#fff',
    borderColor: '#aaa',
    elevation: 3,
    paddingTop: 25
  },
  iosHeaderTitle: {
    fontSize: 18,
    fontWeight: '500',
    color:'#000'
 },
 aHeaderTitle: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
    marginTop: -5
 },
 mapContainer: {
   
    height: deviceHeight/1.3, 
    
 }, 
 map: {
   position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
 
  detailContainer: {
    borderWidth: 0,
    padding: 10
  },
  driverImage: {
    borderRadius: 20,
    marginTop: 3
  },
  cashText: {
    alignSelf: 'flex-end',
    marginTop: -40
  },
  

});