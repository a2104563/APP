import { StyleSheet, Text, View, ScrollView } from "react-native";

import { Ionicons } from '@expo/vector-icons';

import Formulario from "./componentes/formulario";
import ButtonBox from "./componentes/buttonBox";
import Checkbox from "./componentes/checkbox";



export default function Cadastro(){
    

    const Termos=[{text:'Aceito os termos de uso', id:1}, {text:'Aceito a política de privacidade', id:2} ]
    

    return(
        <ScrollView style={{backgroundColor: '#000'}}>  
            <View  style={styles.container}>
                <Text style={styles.texto}>Dados pessoais</Text>       
                                        
                <Formulario/>      
    
                <View style={styles.checkContainer}>
                    <Checkbox options={Termos} />
                </View>
                        
                <ButtonBox
                    Screen={'Cadastro2'}
                />
            </View>            
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    texto:{
        fontSize: 30,
        color: '#17A398',
        alignSelf: 'baseline',
        marginLeft: 30,
        marginBottom: 15,
    },
    checkContainer:{
        alignItems:'baseline',
        marginBottom:40,
    }
})