import { StyleSheet,View,SafeAreaView, Text,Image } from 'react-native'
import React from 'react'
import {capitalize} from "lodash";
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Header(props) {
    const {name, order , imagen, type} = props;
    const color = getColorByPokemonType(type);
    console.log(props);
  return (
    <View>
      <Text>Pokemon Header</Text>
    </View>
  )
}