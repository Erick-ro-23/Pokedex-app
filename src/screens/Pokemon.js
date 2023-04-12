import { ScrollView, Text } from 'react-native'
import React, {useEffect,useState} from 'react'
import {getPokemonDetailsApi} from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";



export default function Pokemon(props) {
  const {route: {params}, navigation} = props;
  const [pokemon, setPokemon] = useState(null);
  console.log(params.id);

  useEffect(() => {
    (async ()=> {
      try{
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
        // console.log(response)
      } catch (error){
        navigation.goBack();
      }
    })();
  },[params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header name={pokemon.name} 
      order = {pokemon.order} 
      image = {pokemon.sprites.other["official-artwork"].front_default}
      type = {pokemon.types[0].type.name}
      />
      <Type types={pokemon.types}/>
    </ScrollView>
  )
}