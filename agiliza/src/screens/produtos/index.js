import { StyleSheet, Text, View } from "react-native";
import FlatList from "./componentes/flatList";
import BarShopCar from "./componentes/barShopCar";



export default function Produtos(){
   return(
   <View style={style.conteiner}>
    <BarShopCar/>
    <FlatList />
   </View>)
   

}
const style= StyleSheet.create({
    conteiner:{
        height:'100%',
        backgroundColor: '#37323E'        
    },
    texto:{
        color: '#FFF'
    },

})