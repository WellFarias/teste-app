import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import Button from '../components/Button';

export default ({navigation}: any) => {
  return (
    <View style={style.container}>
      <View style={style.loginContainer}>
        <KeyboardAvoidingView behavior="position" enabled={true}>
          <View style={style.areaField}>
            <Text style={style.inputLabel}>Primeiro Nome</Text>
            <TextInput placeholder="Digite o seu primeiro nome" />
          </View>

          <View style={style.areaField}>
            <Text style={style.inputLabel}>Segundo Nome</Text>
            <TextInput placeholder="Digite o seu segundo nome" />
          </View>

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

          <View style={style.areaField}>
            <Text style={style.inputLabel}>Corirmar Senha</Text>
            <TextInput
              placeholder="Confirme sua senha"
              secureTextEntry={true}
            />
          </View>

          <Button
            title="Criar conta"
            onPress={() => Alert.alert('conta criada com sucesso !')}
          />

          <Text
            style={style.signUpDescription}
            onPress={() => navigation.navigate('UserForm')}>
            Ja tenho uma conta
          </Text>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    position: 'relative',
  },

  loginContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
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
