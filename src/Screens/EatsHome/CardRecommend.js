import { Dimensions, ScrollView, StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './HomeStyle';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';


const CardRecommend = () => {
    return (

        <TouchableOpacity style={styles.RecommendCard} activeOpacity={0.7}>
            <ImageBackground imageStyle={{ borderRadius: 15, }} source={require('./Images/Recomm3.png')} style={styles.recommendedsliderImg}>
                <View style={styles.downTheText} >
                    <Text style={styles.recomendHeadTxt} >Snacks to enjoy!</Text>
                    <Text style={styles.recomendSubHeadTxt} >30 Places</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>

    )
}

export default CardRecommend