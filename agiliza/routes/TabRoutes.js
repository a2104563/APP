import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Feather, MaterialIcons, Octicons } from '@expo/vector-icons'

import Cadastro1 from "../src/screens/cadastro/cadastro1"
import Cadastro2 from "../src/screens/cadastro/cadastro2"
import Checkout from "../src/screens/Checkout";
import Eventos from "../src/screens/eventos";
import Login from "../src/screens/login"
import MeusDados from "../src/screens/meusDados";
import MeusPedidos from "../src/screens/meusPedidos";
import Produtos from "../src/screens/produtos";
import Sobre from "../src/screens/sobre";



const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{
            tabBarStyle:{
                backgroundColor: '#6D6A75',
                borderTopColor: 'transparent',
                paddingBottom: 5,
                paddingTop: 5,
            },
            tabBarActiveTintColor: '#17A398',
        }}
        >
            <Tab.Screen 
                name='Eventos' 
                component={Eventos}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=> (//desconruindo color e size para pegar por padrao no activeTint
                        <MaterialIcons name='event' size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen 
                name='MeusPedidos' 
                component={MeusPedidos}
                options={{
                    tabBarIcon: ({size, color})=> (
                        <Octicons name='checklist' size={size} color={color}/>
                    )
                }}
            />
                

            <Tab.Screen 
                name='MeusDados' 
                component={MeusDados}
                options={{
                    tabBarIcon: ({size, color})=> (
                        <Feather name='user' size={size} color={color}/>
                    )
                }}    
            />

            <Tab.Screen 
                name='Sobre' 
                component={Produtos}
                options={{
                    tabBarIcon: ({size, color})=> (
                        <Octicons name='question' size={size} color={color}/>
                    )
                }}    
            />
            

        </Tab.Navigator>
    )
}
