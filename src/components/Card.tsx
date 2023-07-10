import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default () => {
  return (
    <View style={style.card}>
      {/* <View>
        <Text style={style.heading}></Text>
      </View> */}
      <Text>
        Faca seu seu agendamento, e tenha a melhor experiencia no seu servico
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    display: 'flex',
    paddingVertical: 35,
    paddingHorizontal: 25,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    elevation: 12,
    shadowColor: '#bababa',
    borderColor: '#f5f5f5',
    borderWidth: 1,
  },
});
