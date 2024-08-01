import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Ejercicio1: React.FC = () => {
  interface Numpar {
    pares: number[];
    impares: number[];
  }

  const [numeros, setNumeros] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  const [numerosParesImpares, setNumerosParesImpares] = useState<Numpar>({ pares: [], impares: [] });

  const clasificarNumeros = () => {
    const pares = numeros.filter(num => num % 2 === 0);
    const impares = numeros.filter(num => num % 2 !== 0);
    setNumerosParesImpares({ pares, impares });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text>Numeros: {numeros.join(', ')}</Text>
      <TouchableOpacity onPress={clasificarNumeros} style={styles.button}>
        <Text>Clasificar</Text>
      </TouchableOpacity>
      <Text>Pares: {numerosParesImpares.pares.join(', ')}</Text>
      <Text>Impares: {numerosParesImpares.impares.join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'aquamarine',
    padding: 10,
    borderRadius: 5,
  },
});



