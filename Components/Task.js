import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Task = (props) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemleft}>
      <TouchableOpacity style={styles.square}></TouchableOpacity>
      <Text style={styles.ItemText}>{props.Text}</Text>
        </View>

    </View>
  )
} 
const styles = StyleSheet.create({
    item:{
        backgroundColor:"#fff",
        padding:15,
        alignContent:"center",
        borderRadius:10,
        marginBottom:20,
       
    },
    itemleft:{
    flexDirection:"row",
    gap:10
    },
    square:{
        width:24,
        height:24,
        borderRadius:10,
        backgroundColor:"#55BCFC",
        opacity:0.4,
    },
    ItemText:{},
});

export default Task