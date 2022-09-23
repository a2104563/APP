import { StyleSheet, View} from "react-native";
import { Ionicons } from '@expo/vector-icons';

import ButtonBox from "./componentes/buttonBox";
import ButtonText from "./componentes/buttonText";
import Input from "../componentes_globais/input";
import InputPassword from "../componentes_globais/input_password";


export default function Login(){

    return(
        
    <View style={styles.container}>
        
        
            <Ionicons name='logo-octocat' color='#17A398' size={75}  />       
            
            <Input placeholder='Email' placeholderTextColor='#6D6A75'/>
            
            <InputPassword placeholder='Senha' placeholderTextColor='#6D6A75'/>    

            <ButtonText                
                labelButton='Esqueci a senha'
                msg1='Cadastrar nova senha'
                msg2='Segue para pagina de redefinir senha'
            />
      
        
            <ButtonBox 
                labelButton='Entrar'
                msg1='Entrando...'
                msg2='Segue para pagina inicial'
            />   

            <ButtonBox 
                labelButton='Cadastre-se'
                msg1='Cadastrado'
                msg2='Segue para pagina de cadastro'
            />  
          
        
    </View>
    
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        
    },


})