import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import WelcomePage from '../../pages/welcome';
import About from '../../pages/about';
import Register from '../templates/Register';
import Login from '../templates/Login';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome">
        <Drawer.Screen
          name="Welcome"
          component={WelcomePage}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            headerStyle: {
              backgroundColor: '#E5E5E5',
            },
          }}
        />
        <Drawer.Screen
          options={{headerShown: false}}
          name="Register"
          component={Register}
        />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
