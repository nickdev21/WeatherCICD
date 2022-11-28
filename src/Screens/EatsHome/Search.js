import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, StatusBar, ImageBackground, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './HomeStyle';
import AntIcon from 'react-native-vector-icons/AntDesign';


const Search = () => {
    return (
        <View style={styles.searchWrapper}>
            <View style={styles.makeRowtheSearch} >
                <AntIcon style={styles.SearchIcon} name="search1" size={20} color="#C6C6C6" />
                <TextInput style={styles.textInSearch} placeholder='Search here' />
            </View>
            <TouchableOpacity style={styles.filterArea}>
                <Image
                    source={require('./Images/filter.png')}
                    resizeMode="cover"
                    style={styles.cardImg}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Search