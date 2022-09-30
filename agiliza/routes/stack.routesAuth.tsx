import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Cadastro from '../src/screens/cadastro/Cadastro';
import Checkout from '../src/screens/Checkout';
import Eventos from '../src/screens/eventos';
import InfoEventos from '../src/screens/eventos/infoEventos';
import Login from '../src/screens/login';
import MeusDados from '../src/screens/meusDados';
import MeusPedidos from '../src/screens/meusPedidos';
import Produtos from '../src/screens/produtos';
import RequestLogin from '../src/screens/RequestLogin';


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
            <Screen
                name='Cadastro'
                component={Cadastro}
                options={{ headerShown: false }}
            />
            <Screen
                name='InfoEventos'
                component={InfoEventos}
                options={{ headerShown: false }}
            />

        </Navigator>
        
    )
}

