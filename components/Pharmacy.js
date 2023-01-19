import { StyleSheet, Text, View ,ImageBackground, FlatList,ScrollView,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import SearchBAr from './Searchbar' 
import DATA from '../api/DATA';
import Icon from 'react-native-vector-icons/AntDesign';



const Item = ({title,light,rs,image,navigation}) => (
    <View  style={styles.item} >
        <Image 
        style={styles.tinyLogo}
        source={image}
      />
      <Text style={styles.title} >{title}</Text>
      <Text style={{color:"grey"}}>{light}</Text>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:8}}>
      <View>
      <Text style={{fontWeight:"bold",marginRight:8}}>{rs}</Text>

      </View>
      <View style={{backgroundColor:"#6FB898",paddingVertical:5,paddingHorizontal:9,fontWeight:"bold",alignSelf:"flex-end"}}>
<Icon name="plus" size={15} color="white"  />

</View>

      </View>
    </View>
  );
  
const Pharmacy = ({navigation}) => {
    
  return (
    <ScrollView>
     
      <SearchBAr/>
      <View style={{textAlign:"center",borderRadius:20,borderColor:"white",borderWidth:9}}>
      <ImageBackground source={require('../assets/images.jpg')} style={{width: '100%', height: 250,alignItems:"center",justifyContent:"center"}}>
   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,padding:20}}>
     <Text style={{fontWeight:"bold",fontSize:25}}>Order quickly with prescription </Text>
     <Text
                        style={styles.btn}
                    >
                      Upload prescription 
                    </Text>
   </View>
</ImageBackground>
</View>
<View style={{margin:10}}>
<View style={styles.flex}>

<View >
  <Text style={{fontWeight:"bold",fontSize:20}}>Popular Products</Text>
  
  
  </View>
  <View>
  <Text style={{color:"#6FB898",fontWeight:"bold"}}>See All</Text>
  </View>
</View>

<FlatList show 
        data={DATA} showsHorizontalScrollIndicator={false} horizontal
        renderItem={({item}) =><><TouchableOpacity onPress={() => navigation.navigate('DrugDetail', {
          itemId: item.id,
        })}>
          <Item   title={item.title} light={item.light} rs={item.rs} image={item.image}/> 
          </TouchableOpacity>
          </>}
        keyExtractor={item => item.id}
      />
     
<View style={styles.flex}>

<View >
<TouchableOpacity >
  <Text style={{fontWeight:"bold",fontSize:20}} >Products on sale</Text>
  </TouchableOpacity>
  
  </View>
  <View>
  <Text style={{color:"#6FB898",fontWeight:"bold"}}>See All</Text>
  </View>
</View>
</View>


<FlatList show 
        data={DATA} showsHorizontalScrollIndicator={false} horizontal
        renderItem={({item}) => <><TouchableOpacity onPress={() => navigation.navigate('DrugDetail', {
          itemId: item.id,
        })}>
          <Item   title={item.title} light={item.light} rs={item.rs} image={item.image}/> 
          </TouchableOpacity>
          </>}
        keyExtractor={item => item.id}
      />
      
    </ScrollView>
  )
}

export default Pharmacy

const styles = StyleSheet.create({
    btn:{
        backgroundColor:"#6FB898",paddingHorizontal:7,paddingVertical:12,color:"white",
      borderRadius:30,width:200,textAlign:"center",fontWeight:"bold",marginTop:35
      }, flex:{
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row"
        ,marginTop:20
      },
      item: {
        borderColor:"#D3D3D3",
        borderWidth:1,
        borderRadius:6,
        paddingHorizontal: 10,
        paddingVertical:5,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
       fontWeight:"900"
      },
      tinyLogo: {
        
           width: 90,
           height:60,
           
         },
})