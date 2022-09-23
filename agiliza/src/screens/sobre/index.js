import { StyleSheet, Text } from "react-native";


export default function Sobre(){
    return(<>
        <Text style={style.texto}>Pagina Explicando como usar o App</Text>
    </>)

}
const style= StyleSheet.create({
    texto:{
        color: '#FFF'
    }
})