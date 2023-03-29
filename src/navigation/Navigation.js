import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
//Screens
import FavoriteScreen from '../screens/Favorite';
// import FavoriteNavigation from './FavoriteNavigation';
import PokedexScreen from '../screens/Pokedex';
import PokedexNavitagion from './PokedexNavitagion';
import Account from '../screens/Account';
import PokemonScreem from '../screens/Pokemon';



const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Favorite' component={FavoriteScreen} options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({color, size}) => <Icon name="heart" color= {color} size={size}/>,
                headerTitle: "Favoritos"}}/>
            <Tab.Screen name='PokedexXx' component={PokedexNavitagion} options={{
                tabBarLabel: "",
                tabBarIcon: () => renderPokeball(),
                
            }}/>
            <Tab.Screen name='Account' component={Account} options={{
                tabBarLabel: "Mi Cuenta",
                tabBarIcon: ({color,size}) => <Icon name="user" color={color} size={size}/>,
                headerTitle: "Mi Cuenta",
        }}/>
        </Tab.Navigator>
    )
}

function renderPokeball() {
    return (
        <Image
        source={require("../assets/pokeball.png")}
        style={{ width: 75, height: 75, top: -15 }}
        />
    );
}