import { StyleSheet, Text, View,StatusBar, ScrollView } from 'react-native'
import React from 'react'

const Screen = ({children}) => {
  return (
    <ScrollView style={styles.container}>
      {children}
    </ScrollView>
  )
}

export default Screen

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        paddingHorizontal:15,
       height:"100%"
    }
})