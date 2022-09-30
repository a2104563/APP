import { StyleSheet, Text, View } from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons'

import ButtonBox from "./componentes/buttonBox";

export default function Sobre(){
    return(
    <View style={style.conteiner}>
        <View style={style.headerContainer}>
           <Text style={style.textHeader}>Sobre</Text>
        </View>

        <View style={{flexDirection:'row', marginBottom:12}}>
            <Ionicons name='ios-information-circle-outline' size={30} color='#FFF'/>
            <Text style={style.textInfo}>Informaçoes</Text>
        </View>
        
        <View style={style.bodyContainer}>
            <ButtonBox labelButton={'Duvidas Frequentes'} Screen={'Cadastro'}/>
            <ButtonBox labelButton={'Termos e politicas'} Screen={'Cadastro'}/>
            <ButtonBox labelButton={'Solicitar ajuda'} Screen={'Cadastro'}/>            
        </View>

        <View style={{flexDirection:'row', marginBottom:12}}>
            <Feather name='user' size={30} color='#FFF'/>
            <Text style={style.textInfo}>Social</Text>
        </View>
        
        <View style={style.bodyContainer}>
            <ButtonBox labelButton={'Redes sociais'} Screen={'Cadastro'}/>
            <ButtonBox labelButton={'Fale conosco'} Screen={'Cadastro'}/>         
        </View>

    </View>
    )

}
const style= StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor: '#37323E',
        padding: 15, 
         
    },
    headerContainer:{     
        marginLeft: 15,
        marginBottom: 30,
    },
    bodyContainer:{
        marginBottom:30,
    },
    textHeader:{
        fontSize: 30,
        color: '#17A398',
    },
    textInfo:{
        fontSize:25,
        color: '#FFF',
        marginLeft:5,
        
    }
})