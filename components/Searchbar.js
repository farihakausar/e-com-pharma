import * as React from 'react';
import { Button, Card, IconButton, Searchbar } from "react-native-paper";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
    Image,
    ScrollView,
    Dimensions,
    Platform,
    SafeAreaView,
    FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import RNPickerSelect from 'react-native-picker-select';
import EvilIcons from "react-native-vector-icons/EvilIcons"


export default function SearchBAr() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const navigation = useNavigation();


    return (
        <SafeAreaView style={{ padding: 30 }}>
            
                <View style={{
                    marginBottom: 15
                }}>
                    <View style={{position:"absolute",top:10,padding:4,zIndex:1}}>
                      <EvilIcons name='search' size={30} color=""/></View>
                    <View style={styles.btn1}>
                    <Searchbar 
                        placeholder="Search "
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    >
                        
                    </Searchbar>
                    </View>
                </View>

            
       

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    resturantCard: {
        marginTop: "30%",
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        btn1:{
            borderColor:"grey",paddingHorizontal:7,paddingVertical:12,color:"white",
           borderRadius:30,width:250,textAlign:"center",fontWeight:"bold",borderWidth:0.5
           },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    resturantMainView: {
        paddingBottom: "20%",
        paddingTop: "20%",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",

    },
    closeIcon: {
        borderWidth: 1,
        borderColor: "Black",
        borderRadius: 50,
        backgroundColor: "red"
    },
    penIcon: {
        borderWidth: 1,
        borderColor: "Black",
        borderRadius: 50,
    },
    resturantText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    salevolumeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue"
    },
    viewsText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    contentContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40
    },
    scrollCardView: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 20,
        padding: 15
    }


});