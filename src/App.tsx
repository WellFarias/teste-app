import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import UserList from './views/Signin';
import UserForm from './views/Signup';
import Home from './views/Home';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={() => {
            return {
              title: '',
            };
          }}
        />

        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{
            title: 'Criar conta',
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const screenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: 'black',
  },

  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: '300',
  },
};
