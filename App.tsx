import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import { FoodDetailsScreen, SearchScreen } from "./app/screens";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SearchScreen}
          options={{ title: 'Food Search'}}
        />
        <Stack.Screen
          name="FoodDetails"
          component={FoodDetailsScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;