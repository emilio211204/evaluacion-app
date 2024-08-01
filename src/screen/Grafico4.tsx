import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Grafico4 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cud1}></View>
        <View style={styles.cud2}></View>
        <View style={styles.cud3}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {    
        marginTop: 50,
        flexDirection: 'row',
    },
    cud1: {
        backgroundColor: 'red',
        width: 100,
        height: 800,
        right:10

   
    },
    cud2: { 
        backgroundColor: 'green',
        width: 100,
        height: 800,
        left:70
    },
    cud3: {
        backgroundColor: 'blue',
        width: 100,
        height: 800,
        left:100  
    },
})
