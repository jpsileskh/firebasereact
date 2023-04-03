import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tarefa from "./src/pages/Tarefa";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tarefa">
        <Stack.Screen
          name="Tarefa"
          component={Tarefa}
          options={{
            headerTintColor:"purple"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
