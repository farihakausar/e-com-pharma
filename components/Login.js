import { StyleSheet, Text, View,SafeAreaView,ImageBackground ,TextInput,Image } from 'react-native'
import React, { useState, useEffect } from 'react';
// import { Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/AntDesign';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Check from '../components/Check';
import EvilIcons from "react-native-vector-icons/EvilIcons"
const Login = ({ navigation }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  return (

    <>
   
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
    
        <View
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            
            }}
        >
             
                   
                   
                    <View  >
                   
                        <View style={[styles.flex,styles.Textfields]}>
                        <EvilIcons name='envelope' size={30} color="#6FB898"/>
                        
                      
                        <TextInput
                            placeholder="Enter your Email"
                           
                            value={email}
                            onChangeText={(e) => { setemail(e) }}
                        ></TextInput>
</View>
<View style={[styles.flex,styles.Textfields]}>
<EvilIcons name='unlock' size={30} color="#6FB898"/>
                        <TextInput
                            placeholder=" Enter your Password"
                        secureTextEntry={true}
                            value={password}
                            onChangeText={(e) => { setpassword(e) }}
                        ></TextInput>
                        </View>
                        {/*  */}
                       

                        
                        
                        <Text style={{fontSize:18,fontWeight:"bold",color:"#6FB898",marginLeft:150}}>Forgot password?</Text>
                       
                        <View style={{display:'flex',flexDirection:"column"}}>
                        <Text
                        style={styles.btn} onPress={() => navigation.navigate('Pharmacy')}
                    >
                       Login
                    </Text>
                    <Text style={{color:"grey",textAlign:"center",marginTop:20}}>Dont have a account?   <Text style={{color:"#6FB898",fontWeight:"bold"}}>Sign up</Text> </Text>

                    </View>
                            </View>
 <View style={styles.flex1}>
                       
                    <View style={{borderWidth:0.5,borderColor:"grey",width:100,height:1}}></View>
                    <View>
                    <Text style={{ textAlign: "center",marginHorizontal:6,fontWeight:"bold"}}>OR</Text>

                    </View>

<View style={{borderWidth:0.5,borderColor:"grey",width:100,height:1}}></View>

</View>
                    
                    
<View style={[styles.flex1,styles.btn1]}>
    <View style={{marginHorizontal:8}}>
   < FontAwesome name='google' size={20} color="orange"/>
    </View>
    
    <View>          
        
        
        <Text style={{fontWeight:"bold"}}>
                       Signin with Google
                    </Text>  
                    </View>          
              
        </View>
<View style={[styles.flex1,styles.btn1]}>
    <View >

    <View style={{marginHorizontal:8}}>
   < FontAwesome name='facebook' size={20} color="blue"/>
    </View>
    </View>
    
    <View>          
        
        
        <Text style={{fontWeight:"bold"}}>
                       Signin with Facebook
                    </Text>  
                    </View>          
              
        </View>
<View style={[styles.flex1,styles.btn1]}>
    <View >

    <View style={{marginHorizontal:8}}>
   < FontAwesome name='apple' size={20} color="black"/>
    </View>
    </View>
    
    <View>          
        
        
        <Text style={{fontWeight:"bold"}}>
                       Signin with Apple
                    </Text>  
                    </View>          
              
        </View>
              
        </View>
    
</SafeAreaView>
{/* // </ImageBackground> */}
</>
  )
}

export default Login

const styles = StyleSheet.create({

    flex1:{
        display:"flex",
      alignItems:"center",justifyContent:"center",
        flexDirection:"row",padding:8
        ,marginTop:20
      },
    texting:{
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        fontSize: 30,
        borderColor:"#ffdd99",
     
        
        borderWidth:3,
        borderRadius:20,
        paddingHorizontal:50,
        paddingVertical:6,
        // textShadowColor: "	#696969",
        // textShadowOffset: {width: -7, height: 4},
        // textShadowRadius: 20
      
    },btn:{
        backgroundColor:"#6FB898",paddingHorizontal:7,paddingVertical:12,color:"white",
      borderRadius:30,width:300,textAlign:"center",fontWeight:"bold"
      },
    btn1:{
       borderColor:"grey",paddingHorizontal:7,paddingVertical:12,color:"white",
      borderRadius:30,width:250,textAlign:"center",fontWeight:"bold",borderWidth:0.5
      },
    tinyLogo:{
        flex: 1,
        justifyContent: "center",
        height:100,
    },
    // image: {
    //     flex: 1,
    //     justifyContent: "center"
    //   },
    container:{
        padding:20
          },
          flex:{
            display:"flex",
          
            flexDirection:"row"
            ,marginTop:20
          },
          Textfields: {
            borderRadius: 10,
            borderColor:"grey",
                   
                            
                            borderWidth:3,
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
            width: 300,
          },
})