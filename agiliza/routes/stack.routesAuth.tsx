import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Produtos from '../src/screens/produtos';
import Checkout from '../src/screens/Checkout';
import Login from '../src/screens/login';
import TabRoutes from './TabRoutes';

const {Screen, Navigator} = createNativeStackNavigator();

export function StackRoutesAuth(){
    return(
        
        <Navigator>
            <Screen
                name='Home'
                component={TabRoutes}
                options={{ headerShown: false }}
            />
            <Screen
                name='Produtos'
                component={Produtos}
            />
            <Screen
                name='Checkout'
                component={Checkout}
                options={{ 
                    title:'Carrinho' ,
                    headerStyle:{
                        backgroundColor:'#6D6A75'
                    }
                }}
            />
            <Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />
        </Navigator>
        
    )
}

