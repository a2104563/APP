import { StyleSheet, Text, View } from "react-native";
import FlatList from "./componentes/flatList";
import BarSearch from "./componentes/barSearch";



export default function Eventos(){
   return(
   <View style={style.conteiner}>
    <BarSearch/>
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
    }
})