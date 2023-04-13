import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
// import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={PokedexScreen} 
      options={{title:"", headerTransparent: true,
      headerShadowVisible: false}}/>
      <Stack.Screen name="Pokemon" component={PokemonScreen}
      options={{title:"", headerTransparent: true,
      headerShadowVisible: false }} />
    </Stack.Navigator>
  );
}