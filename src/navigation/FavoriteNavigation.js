import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/Favorite";

const Stack = createNativeStackNavigator;
//en la version 6 de react navigation NO hace falta esto!
//solo hace falta poner heartTitle
export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={FavoriteScreen} options={{
        title: "Favoritos"
      }}/>
    </Stack.Navigator>
  )
}