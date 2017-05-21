
'use strict';

import { StyleSheet } from "react-native";
var React = require('react-native');
var { Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
module.exports = StyleSheet.create({
    links: {
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft: 30,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent'
    },
    alinks: {
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomColor: 'transparent'
    },
    iosAboutlink: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        borderBottomWidth: 0,
        borderTopWidth: 1,
        borderTopColor: '#232232',
        borderBottomColor: 'transparent'
    },
    aAboutlink: {
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomColor: 'transparent'
    },
    linkText: {
        paddingLeft: 10,
    },
    logoutContainer: {
        padding: 30,
    },
    logoutbtn: {
        paddingTop: 30,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#797979',
    },
    background: {
        flex: 1,
        width: null,
        height:null,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    drawerContent: {
        paddingTop: 30,
        backgroundColor: '#19192B'
    },
    Bg: {
        backgroundColor: '#19192B' 
    },
    adrawerContent: {
        paddingTop: 20,
        backgroundColor: '#19192B'

    },
    aProfilePic: {
        height: 40,
        width: 40, 
        borderRadius: 40,
    },
    iosProfilePic: {
        height: 40,
        width: 40, 
        borderRadius: 20,
    },
    aSidebarIcons: {
        color: '#999',
        fontSize: 25,
        opacity: 0.8
    },
    iosSidebarIcons: {
        color: '#999',
        marginTop: -5,
        fontSize: 25,
        opacity: 0.8
    },
    image: {
      justifyContent: 'center',
    width: 150,
    height: 150,
    margin: 10,
     borderRadius: 75,
  },
    profile: {
        backgroundColor: '#232232',
        paddingTop: 10,
        paddingBottom: 10
    },
});
