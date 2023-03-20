import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
//Screens
import FavoriteScreen from '../screens/Favorite';
import PokedexScreen from '../screens/Pokedex';
import Account from '../screens/Account';


const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Favorite' component={FavoriteScreen} options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({color, size}) => <Icon name="heart" color= {color} size={size}/>,
                }}/>
            <Tab.Screen name='Pokedex' component={PokedexScreen} />
            <Tab.Screen name='Account' component={Account} options={{
                tabBarLabel: "Mi Cuenta",
                tabBarIcon: ({color,size}) => <Icon name="user" color={color} size={size}/>
        }}/>
        </Tab.Navigator>
    )
}