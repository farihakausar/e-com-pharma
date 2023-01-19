import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Screen from './Screen';
import Icon from 'react-native-vector-icons/AntDesign';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from "react-native-vector-icons/EvilIcons"
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import DATA from '../api/DATA';
const DrugDetail = ({ navigation, route }) => {
  const id = route.params.itemId;
  // console.log(id);

  const selectedCourse = DATA.find((element) => {
    return id === element.id;
  });
  return (
    <>
<Screen>
    <View>
    <View style={{backgroundColor:'white'}}>
    <Image
        style={styles.tinyLogo}
        source={selectedCourse.image}
      />
   </View>
       <Text style={{fontSize:23,fontWeight:"bold"}}>{selectedCourse.title}</Text>
    <View style={styles.flex}>
<View>



        <Text style={{color:"grey"}}>{selectedCourse.light}</Text>
        <View style={styles.flex}>
        <Icon name="star" size={20} color="#6FB898" />
        <Icon name="star" size={20} color="#6FB898" />
        <Icon name="star" size={20} color="#6FB898" />
        <Icon name="star" size={20} color="#6FB898" />
      <Text style={{color:"#6FB898",marginLeft:6,fontWeight:"bold",fontSize:18}}>4.0</Text>
        </View>
        
        </View>
        <View>
     
        <Icon name="heart" size={20} color="red" />
        </View>
      </View>
      <View style={styles.flex}>
<View style={styles.box}>
<View style={{padding:5,fontWeight:"bold"}}>
        <Icon name="minus" size={20} color="black" />
        </View>

<View>
        <Text style={{fontWeight:"bold",fontSize:20,paddingVertical:5,paddingHorizontal:9}}>1</Text></View>
      
        <View style={{backgroundColor:"#6FB898",paddingVertical:5,paddingHorizontal:9,fontWeight:"bold"}}>
<Icon name="plus" size={20} color="white"  />

</View>
        </View>
    
        <View>
        <Text  style={{fontSize:23,fontWeight:"bold"}}>{selectedCourse.rs}</Text>
        </View>
      </View>
      <View>
        <Text  style={{fontSize:23,fontWeight:"bold",}}>Desciption</Text>
        <Text  style={{color:"grey",lineHeight:20}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, et aut libero incidunt deleniti quia assumenda optio molestias architecto veritatis!<Text style={{color:"#6FB898",fontWeight:"bold"}}>Read more </Text>
        </Text>

      </View>
      <View style={styles.flex}>


     
      <View style={{backgroundColor:"grey",paddingHorizontal:6,marginTop:2,paddingVertical:4,borderRadius:5}}>
     <EvilIcons name='cart' size={30} color=""/>
     </View>
     <View>
        <Text style={styles.btn}>Buy now</Text></View>
      </View>
   
    </View>
    </Screen>
    </>
  )
}

export default DrugDetail

const styles = StyleSheet.create({
    tinyLogo: {
     marginLeft:60,
        width: 200,
        height: 200,
        
      },
      flex:{
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row"
        ,marginTop:20
      }
      ,box:{
borderColor:"grey",
borderWidth:1,   
 display:"flex",
width:120,justifyContent:"space-between",

flexDirection:"row"
      }
      ,btn:{
        backgroundColor:"#6FB898",paddingHorizontal:7,paddingVertical:12,color:"white",
      borderRadius:30,width:270,textAlign:"center",fontWeight:"bold"
      }
})