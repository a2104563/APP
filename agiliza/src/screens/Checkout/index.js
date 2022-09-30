import { Text, StyleSheet, View } from "react-native"

import FlatList from "./componentes/flatList"
import Button from "./componentes/button"

export default function ShoppingCart(){
    return(
        <View style={style.container}>
            <FlatList/>
            <View style={style.buttons}>
                <Button text={'PIX'} icon={'qrcode'}/>
                <Button text={'Cartão'} icon={'creditcard'}/>
            </View>

        </View>
    )
}

const style= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#37323E',
    },
    buttons:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 100,

    }
})