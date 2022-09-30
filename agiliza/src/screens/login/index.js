import { StyleSheet, View, TouchableOpacity} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

import ButtonBox from "./componentes/buttonBox";
import ButtonText from "./componentes/buttonText";
import Input from "../componentes_globais/input";
import InputPassword from "../componentes_globais/input_password";



export default function Login(){

    return(
        
    <View style={styles.container}>
        
        
        <Ionicons name='logo-octocat' color='#17A398' size={75}  />       
        
        
        <View style={styles.containerInput}>
            <Input placeholder='Email' placeholderTextColor='#6D6A75'/>
        </View>

        <View style={styles.containerPass}>
            <InputPassword placeholder='Senha' placeholderTextColor='#6D6A75'/>    
        </View>

        <View style={styles.buttonText}>
            <ButtonText                
                labelButton='Esqueci a senha'
                msg1='Cadastrar nova senha'
                msg2='Segue para pagina de redefinir senha'
            />
        </View>
    
    
        <ButtonBox 
            labelButton='Entrar'
            Screen={'Cadastro1'}
            
        />   

        <ButtonBox 
            labelButton='Cadastre-se'
            Screen={'Cadastro'}
        />  

        <View style={styles.containerSocial}>
            <TouchableOpacity>
                <MaterialIcons style={{marginRight:10}} name='facebook' size={60} color='#17A398'/>
            </TouchableOpacity>

            <TouchableOpacity>
                <FontAwesome style={{marginLeft:10}} name='google-plus-circle' size={60} color='#17A398'/>
            </TouchableOpacity>
        </View>        

          
        
    </View>
    
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
    containerInput:{
        marginTop:10,
        marginBottom:5,
    },
    containerPass:{
        marginBottom:5,
    },
    buttonText:{
        alignSelf: 'baseline',
        marginLeft:30,
        marginBottom: 20,
    },
    containerSocial:{
        flexDirection:'row',     
    }

})