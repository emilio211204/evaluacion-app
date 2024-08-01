
import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Grafico1 = () => {
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
        backgroundColor: 'aquamarine',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 50,
    },
    cud1: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
    },
    cud2: {
        backgroundColor: 'green',
        width: 100,
        height: '77%',
    },
    cud3: {
        backgroundColor: 'blue',
        width: 100,
        height: 100,
    },
});

