import { StyleSheet, Text, View } from "react-native";
import FlatList from "./componentes/flatList";


export default function Eventos(){
   return(
   <View style={style.conteiner}>    
    <Text style={style.textHeader}>Eventos</Text>
    <FlatList/>
   </View>)
   

}
const style= StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor: '#37323E'        
    },
    texto:{
        color: '#FFF'
    },
    textHeader:{
        fontSize: 30,
        color: '#17A398',
        alignSelf: 'baseline',
        marginLeft: 30,
        marginBottom: 15,
        marginTop: 15,
    }
})