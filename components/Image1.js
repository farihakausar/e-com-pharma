import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcons from "react-native-vector-icons/EvilIcons"
const Image1 = () => {
  return (
    <>
    <View>
      <View style={styles.flex}>
      <View>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/med.jpg')}
      />
        </View> 
        <View>
        <Text style={{fontSize:23,fontWeight:"bold",lineHeight:30}}>OBH combi</Text>
        <Text style={{color:"grey",lineHeight:30}}>70ml</Text>
        <View >
<View style={styles.box}>
        <View style={{padding:5,fontWeight:"bold"}}>
        <Icon name="minus" size={20} color="black" />
        </View>

<View>
        <Text style={{paddingVertical:5,paddingHorizontal:9}}>1</Text></View>
      
        <View style={{backgroundColor:"#6FB898",paddingVertical:5,paddingHorizontal:9,fontWeight:"bold"}}>
<Icon name="plus" size={20} color="white"  />

</View>
</View>
</View>
        

        </View>
    
        <View style={{}}>
       <View style={{alignSelf:"flex-end"}}><EvilIcons name='credit-card' size={30} color="#6FB898"/></View> 
        <Text  style={{fontSize:23,fontWeight:"bold",marginTop:33}}>200PkR</Text>
        
        </View>
        </View>
      </View>
      </>
  )
}

export default Image1

const styles = StyleSheet.create({
    tinyLogo: {
       
           width: 80,
          height: 80,
           backgroundColor:"grey"
         },
         flex:{
          display:"flex",
          justifyContent:"space-between",
          flexDirection:"row"
          ,marginTop:20,padding:15,
        marginHorizontal:7,
            
                   
            shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: 2,
            shadowOffset: {
              height: 1,
              width: 1
            },          
                        //    borderWidth:1,
         
            padding: 10,
           
          },box:{
            borderColor:"grey",
            borderWidth:1,   
             display:"flex",
            width:120,justifyContent:"space-between",
            
            flexDirection:"row"
                  }
        
})