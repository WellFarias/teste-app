import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';

export interface BtnComponent {
  title: string;
  onPress: () => void;
}

export default ({onPress, title}: BtnComponent) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    width: '95%',
    elevation: 10,
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 24,
    //height: 40,
    margin: 10,
  },
  appButtonText: {
    fontSize: 15,
    fontStyle: 'normal',
    color: '#fff',
    fontWeight: '600',
    lineHeight: 20,
    alignSelf: 'center',
    fontFamily: 'Exo2',
  },
});
