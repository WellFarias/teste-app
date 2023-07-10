import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Card from '../components/Card';

export default () => {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={style.mainMenu}>
        <Text style={style.text}>Olá Well Farias</Text>
        <View style={style.saldo}>
          <Text style={style.saldo.value}>2.214<Text style={style.ptsLabel}> pts</Text>
          </Text>
        </View>
      </View>

      <View style={style.mainBody}>
        <Text style={style.title}>Agendas</Text>
        <Card />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  statusBar: {
    backgroundColor: 'black',
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
    position: 'relative',
  },

  mainBody: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '85%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
  },

  mainMenu: {
    paddingHorizontal: 16,
  },

  text: {
    color: '#FFFFFF',
  },

  saldo: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 8,

    value: {
      color: '#FFFFFF',
      fontSize: 24,
      fontWeight: 'bold',
    },
  },

  ptsLabel: {
    fontSize: 12,
  },
});
