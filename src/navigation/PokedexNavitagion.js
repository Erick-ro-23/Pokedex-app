import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PokedexScreem from '../screens/Pokedex';
import PokemonScreem from '../screens/Pokemon';


const Stack = createNativeStackNavigator();
//en la version 6 de react navigation NO hace falta esto!
//solo hace falta poner heartTitle
export default function PokedexNavitagion() {
  return (
  <Stack.Navigator>
    <Stack.Screen name='Pokedex' component={PokedexScreem}/>
    <Stack.Screen name='Pokemon' component={PokemonScreem}/>
  </Stack.Navigator>
  )
}