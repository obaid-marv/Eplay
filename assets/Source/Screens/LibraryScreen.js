import React from 'react';
import { View , StyleSheet, Button, Text, TouchableOpacity, TextInput, Pressable, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

const Login = () => {

    return(
        <View style={styles.container}>
            <View style = {styles.content}>


            <View style={styles.heading}>
                <Pressable style={{flex:1, left:18}}>

                <Ionicons name='arrow-back' size={35} color= "#A6A6A6" />
                </Pressable>
            <Text style = {[styles.title, {flex:2, display:"flex" }]}>Library</Text>
            </View>

<View style={styles.upperCardsClass}>

            <Pressable>
                <View style = {[styles.upperCard]}>
                    <Ionicons name='mic-circle' size={35} color="yellow" />
                    <Text style={[styles.colorWhite,  styles.smallFonts] }>Downloads</Text>
                </View>
            </Pressable>
            <Pressable>

                <View style = {[styles.upperCard]}>
                    <Ionicons name='disc' size={35} color="yellow" />
                    <Text style={[styles.colorWhite,  styles.smallFonts] }>Playlists</Text>
                </View>
            </Pressable>
            <Pressable>

                <View style = {[styles.upperCard]}>
                    <Ionicons name='musical-notes' size={35} color="yellow" />
                    <Text style={[styles.colorWhite,  styles.smallFonts] }>Favourites</Text>
                </View>
            </Pressable>
            <Pressable>

                <View style = {[styles.upperCard]}>
                    <Ionicons name='musical-note' size={35} color="yellow" />
                    <Text style={[styles.colorWhite,  styles.smallFonts] }>Local files</Text>
                </View>
            </Pressable>

</View>
            <View style={styles.lowerBody}>
                <Text style = {styles.colorOffWhite}>Recently Streamed</Text>
                <View>

                <Pressable>

                    <View style={styles.libraryCard}>
                        <View style = {styles.imageDiv}>
                            <Image style={{width:75, height:75, borderRadius:15}} source={require("../covers/Havana.jpg")}/>
                        </View>
                        <View style={styles.data}>
                            <Text style = {{color:"yellow"}}>Album name</Text>
                            <Text style = {{color:"#aaa"}}>No. of Songs</Text>
                        </View>
                    </View>
                </Pressable>
                </View>
            </View>

</View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    nextButton:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"yellow",
        alignItems:"center",
        fontWeight:"bold",
        marginTop: 45,
        padding:6,
        borderRadius:30,
    },
    heading:{
        display:"flex",
        flexDirection:"row",
    },
    libraryCard:{
        width:350,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:80,
        flexDirection:"row",
    },
    imageDiv:{
        flex:2,
        borderRadius:18,
    },
    data:{
        flex:6,
    },
    lowerBody:{
        marginTop:40,
        top:45,
        left:10,
    },
    colorOffWhite:{
        color:"#aaa",
        bottom:15,
    },
    upperCard:{
        display:"flex",
        width:70,
        height:70,
        margin:6,
        alignItems:"center",
        paddingTop:9,
        backgroundColor:"black",
        borderRadius:12,
        elevation:55,
        shadowRadius:8,
        shadowColor:"yellow",
        shadowOffset:{width:6, height:4},
        shadowOpacity:1,
        top:25,
    },
    container: {
        
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"black",
    },
    content:{
        top:130,
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start",
    },
    upperCardsClass:{
        display:"flex",
        flexDirection:"row",
        top:10,
    },
    title:{
        fontSize:24,
        color:"white",
        fontWeight:"700",
        margin: 6,
    },
    pText:{
        color:"white",
        margin:8,
        fontSize:16,
    },
    colorWhite:{
        color:"yellow"
    },
    smallFonts:{
        fontSize:12,
    }
});