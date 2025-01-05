import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from '../screens/registration/Registration';
import Landing from '../screens/landing/Landing';
import { Colors } from '../utils/Colors';
import ProfileDetails from '../screens/profile-details/ProfileDetails';
import Validation from '../screens/validation/Validation';

export type RootStackParamList = {
  Root:undefined;
  Landing: undefined;
  Registration: undefined;
  ProfileDetails:undefined;
  Validation:undefined;
}

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        statusBarColor:Colors.cinnabar,
        headerStyle: {
          backgroundColor: Colors.cinnabar,
        },
        headerTintColor: Colors.white,
        headerTitleAlign: 'center',
      }}
    >
    <Stack.Screen
        options={{headerShown:false}}
        name="Landing"
        component={Landing}
    />
      <Stack.Screen
        options={{headerShown:false}}
        name="Registration"
        component={Registration}
      />
      <Stack.Screen
        options={{headerShown:false}}
        name="ProfileDetails"
        component={ProfileDetails}
      />
       <Stack.Screen
        options={{headerShown:false}}
        name="Validation"
        component={Validation}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
