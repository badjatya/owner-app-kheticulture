import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Importing Navigation
import BottomTabNavigatorScreen from './bottomTab/bottomTabnav';

 const Navigation = () => {
  return (
    <NavigationContainer>
        <BottomTabNavigatorScreen />
    </NavigationContainer>
  );
}

export default Navigation;