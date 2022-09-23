import { StyleSheet, Text, View } from "react-native";
import RequestLogin from "../RequestLogin";


export default function MeusDados(){
    return(

    <View style={style.container}>
        <RequestLogin Texto={'Você precisa estar logado para visualizar seus dados.'} />
    </View>
   )

}
const style= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#37323E',
        padding: 20,
        alignItems:'center',
        justifyContent: 'center'
    }
})