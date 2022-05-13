import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LightPage from "./pages/index";
import DarkPage from "./pages/dark";

 const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LightPage" component={LightPage}
          options={{ title: 'Light Theme',
            headerStyle:{ backgroundColor: '#121212'}, headerShown: false, }}
          />

<Stack.Screen name="DarkPage" component={DarkPage}
          options={{ title: 'Dark Theme',
            headerStyle:{ backgroundColor: '#121212'}, headerShown: false, }}
          />
  
      </Stack.Navigator>
    </NavigationContainer>
  )
}
