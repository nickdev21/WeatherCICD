import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { styles } from './HomeStyle';
import HomeHeaderImg from "./Images/homeheader.jpeg"
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';


const HomeHeader = () => {
    return (
        <>
            <ImageBackground imageStyle={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }} source={HomeHeaderImg} style={styles.HeaderContainer}>
                <View style={styles.HeaderDetail} >
                    <TouchableOpacity style={styles.ImageContent} activeOpacity={0.6} >
                        <IonIcon name="ios-location-outline" size={22} color="#FFFFFF" />
                        <Text style={styles.WhiteTxtHeaderHeading} >China Town</Text>
                        <IonIcon name="ios-chevron-down" size={22} color="#FFFFFF" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <IonIcon name="ios-notifications-outline" size={25} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    )
}

export default HomeHeader
