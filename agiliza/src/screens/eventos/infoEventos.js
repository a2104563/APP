import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Entypo, Feather, Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons'


import Cachacadores from './componentes/imagensEventos/Cachacadores.png'
import OverXII from './componentes/imagensEventos/OverXII.png'
import Tardezinha from './componentes/imagensEventos/tardezinha.png'
import LogoXii from './componentes/imagensEventos/logo_xii.jpg'




export default function InfoEventos(){
    const navigation= useNavigation();
    function goProdutos(){        
        navigation.navigate('Produtos');
    }
    return(
        <View style={style.container}>
            <Image source={Cachacadores} style={style.imageContainer}/>   
            <View style={{padding:20}}>
                <Text style={style.title}>Cachaçadores</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image source={LogoXii} style={style.logoContainer}/>   
                    <View style={{flexDirection:'column', marginLeft:15}}>
                        <Text style={style.organizacao}>XII de Março</Text>

                        <View style={style.containerInfos}>
                            <AntDesign style={{marginRight:5}} name="calendar" size={18} color='#17A398'/>
                            <Text style={style.infos}>Sáb 15 de Out</Text>
                        </View>

                        <View style={style.containerInfos}>
                            <AntDesign style={{marginRight:5}} name="clockcircleo" size={18} color='#17A398'/>
                            <Text style={style.infos}>22:00</Text>
                        </View>  

                        <View style={style.containerInfos}>
                            <Ionicons style={{marginRight:5}} name='ios-location-outline' size={20} color='#17A398'/>
                            <View style={{flexDirection:'column'}}>
                                <Text style={style.infos}>Copel{'\n'}Av. Aviacao, 2753</Text>
                                
                            </View>
                        </View>
                    </View>

                </View>
                <Text style={style.titleDesc}>Descrição do evento</Text>
                <Text style={style.descricao}>Ressaca pós carnaval. A Atletica XII de Março apresenta a 8ºEdição do melhor OpenBar de Apucarana.
                    O evento conta com diversos entretenimentos como: futebol no sabão, guerra de cotonete, pula-pula, entre outros.
                    Além das atrações: Mc Mayara, DJ Alok e DJ Tadeu.
                </Text>
            </View>

        </View>
    )
}

const style= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#37323E',
    },
    imageContainer:{
        width:'100%',
        height:150,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    logoContainer:{
        width:110,
        height:110,
        borderRadius: 110,
    },
    containerInfos:{
        flexDirection:'row', 
        alignItems:'center',
        margin:2
    },
    title:{
        fontSize:30,
        color: '#DCDCDC',
        alignSelf: 'center',
        marginTop:12,
        marginBottom: 20,
        fontWeight:'bold'
    },
    descricao:{
        fontSize:20,
        textAlign:'left',
        color:'#DCDCDC',
        lineHeight:25,
    },
    organizacao:{
        fontSize:18,
        color:'#DCDCDC',
        fontWeight:'bold'
    },
    infos:{
        fontSize:15,
        color: '#17A398',
        
    },
    titleDesc:{
        fontSize: 30,
        color:'#17A398',
        fontWeight:'bold',
        lineHeight:60
    },

})  