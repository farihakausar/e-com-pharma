import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import FontAwesomeIcon  from "react-native-vector-icons/FontAwesome"
import Image1 from './Image1'
const Mycart = () => {
  return (
    <ScrollView>
     <Image1/>
     <Image1/>
     <View style={{margin:10}}>
     <Text style={{fontWeight:"bold",fontSize:20}}>Payment Detail</Text>
     <View style={styles.flex}>

      <View >
        <Text style={{color:"grey"}}>Subtotal</Text>
        
        
        </View>
        <View>
        <Text style={{color:"grey"}}>300PKR</Text>
        </View>
     </View>
     <View style={styles.flex}>

      <View >
        <Text style={{color:"grey"}}>Taxes</Text>
        
        
        </View>
        <View>
        <Text style={{color:"grey"}}>10PKR</Text>
        </View>
     </View>
     <View style={styles.flex}>

      <View >
        <Text style={{fontWeight:"bold"}}>Total</Text>
        
        
        </View>
        <View>
        <Text style={{fontWeight:"bold"}}>310PKR</Text>
        </View>
     </View>
     {/* <View style={{borderWidth:0.4,borderColor:"grey",width:350,height:0.5,marginTop:10}}></View> */}
     <View style={styles.flex}>
    
      <View >
        <Text style={{fontWeight:"bold"}}>Order no</Text>
        
        
        </View>
        <View>
        <Text style={{fontWeight:"bold"}}>3578</Text>
        </View>
     </View>
     {/* <View style={{borderWidth:0.4,borderColor:"grey",width:350,height:0.5,marginBottom:10}}></View> */}
     <Text style={{fontWeight:"bold",fontSize:20}}>Payment Method</Text>
     <View style={styles.flex}>

      <View >
        <Text style={{color:"blue",fontStyle:"italic",fontWeight:"bold"}}>Visa</Text>
        
        
        </View>
        <View>
        <Text style={{color:"grey"}}>change</Text>
        </View>
     </View>
     <View style={styles.flex}>

      <View >
        <Text style={{color:"blue",fontStyle:"italic",fontWeight:"bold"}}>COD</Text>
        
        
        </View>
        <View>
        <Text style={{color:"grey"}}>change</Text>
        </View>
     </View>
     <View style={styles.flex}>


     
      <View >
    <Text style={{color:"grey"}}>Total</Text>
    <Text style={{fontWeight:"bold",fontSize:20}}>310PKR</Text>
     </View>
     <View>
        <Text style={styles.btn}>Check out</Text></View>
      </View>
     </View>
    </ScrollView>
  )
}

export default Mycart

const styles = StyleSheet.create({
  flex:{
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"row"
    ,marginTop:20
  },btn:{
    backgroundColor:"#6FB898",paddingHorizontal:7,paddingVertical:12,color:"white",
  borderRadius:30,width:150,textAlign:"center",fontWeight:"bold"
  }
})