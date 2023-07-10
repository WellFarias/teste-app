import React from 'react';
import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import Button from '../components/Button';

export default ({navigation}: any) => {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <Image
        style={style.logo}
        source={{
          uri: 'https://i.pinimg.com/originals/c3/a5/19/c3a5196189074db066a9fc3507342c08.jpg',
        }}
      />

      <View style={style.loginContainer}>
        <KeyboardAvoidingView behavior="position" enabled={true}>
          <Text style={style.formTitle}>Login</Text>
          <View style={style.areaField}>
            <Text style={style.inputLabel}>Email</Text>
            <TextInput placeholder="Digite o seu email" />
          </View>

          <View style={style.areaField}>
            <Text style={style.inputLabel}>Senha</Text>
            <TextInput
              placeholder="Digite o sua senha"
              secureTextEntry={true}
            />
          </View>

          <Button title="Login" onPress={() => navigation.navigate('Home')} />

          <Text
            style={style.signUpDescription}
            onPress={() => navigation.navigate('UserForm')}>
            Criar conta
          </Text>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  statusBar: {
    backgroundColor: 'black',
  },

  logo: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 200,
    margin: 'auto',
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
    position: 'relative',
  },

  loginContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '60%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  formTitle: {
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 24,
    color: '#000',
  },

  areaField: {
    backgroundColor: '#FFFFFF',
    width: '95%',
    margin: 10,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 12,
    shadowColor: '#bababa',
    borderColor: '#f5f5f5',
    borderWidth: 1,
  },

  inputLabel: {
    fontWeight: 'bold',
  },

  signUpDescription: {
    marginTop: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#000',
  },
});
