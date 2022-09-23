import { StyleSheet, View, SafeAreaView } from "react-native";

import { Ionicons } from '@expo/vector-icons';


import ButtonBox from "./componentes/buttonBox";
import Input from "../../componentes_globais/input";
import InputPassword from "../../componentes_globais/input_password";




export default function Cadastro2(){
    return(
        <>
        <View style={styles.viewLogo}>
            <Ionicons name='logo-octocat' color='#FFC222' size={75}  />
        </View>

        <SafeAreaView style={styles.safeArea}> 

            <View style={styles.viewInputEmail}>
                <Input placeholder='Email' placeholderTextColor='#707070'/>
            </View>

            <View style={styles.viewInputPass}>
                <InputPassword placeholder='Senha' placeholderTextColor='#707070'/>
            </View>

            <View style={styles.viewInputConfirmPass}>
                <InputPassword placeholder='Confirme a senha' placeholderTextColor='#707070'/>
            </View>

            <View style={styles.viewButton}>
                <ButtonBox
                    labelButton='Next'
                    msg1='Proximo'
                    msg2='Segue para proxima tela de cadastro'
                />                
            </View>
        </SafeAreaView>
        </>
    )
}

const styles= StyleSheet.create({
    viewLogo:{  
        alignItems:'center',
        marginTop:50,
        flex:1,      
    },
    viewButton:{        
        alignSelf: 'center',   
        marginTop: 30,  
    },
    safeArea:{
        flex: 1,    
        position: 'absolute'
    },
    viewInputEmail:{
        alignItems: 'center',
        marginTop: 50,
    },
    viewInputPass:{
        alignItems: 'center',
        marginTop: 10,
    },
    viewInputConfirmPass:{
        alignItems: 'center',
        marginTop: 10,
    },

})