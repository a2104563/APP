import { StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import Input from "./componentes/input";
import ButtonBox from "./componentes/buttonBox";



export default function Cadastro1(){
    return(
        <>  
        <View style={styles.viewLogo}>
            <Ionicons name='logo-octocat' color='#AABCD0' size={75}  />
        </View> 

        <SafeAreaView style={styles.safeArea}> 

            <View style={styles.viewInput}>        
                <Input/>        
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
    viewInput:{
        alignItems: 'center',
        marginTop: 50,
    },
    safeArea:{
        flex: 1,    
        position: 'absolute'
    }
})