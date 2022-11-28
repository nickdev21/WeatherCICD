import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './HomeStyle';
import { useNavigation } from '@react-navigation/native';
import DetailElement from './DetailElement';
import { SharedElement } from 'react-navigation-shared-element';



const HorizontalCircle = () => {

    const navigation = useNavigation();


    const Images = [
        { image: require('./Images/food1.png'), name: "Chinese" },
        { image: require('./Images/arabic.png'), name: "Indian" },
        { image: require('./Images/indian.png'), name: "Arabic" },
        { image: require('./Images/italian.png'), name: "Italian" },
        { image: require('./Images/food1.png'), name: "Asian" },
    ];

    return (
        <View style={styles.cusineWrapper}>
            <Text style={styles.cusineTxt}>Cuisine</Text>
            <ScrollView horizontal={true} style={styles.categoryContainer}>
                {Images.map(item => {
                    return (

                        <TouchableOpacity
                            style={[styles.categoryBtn]}
                            onPress={() => { navigation.navigate('Detail',  item) }}
                        >
                            <SharedElement style={styles.categoryIcon} id={item.image} >
                                <Image
                                    source={item.image}
                                    resizeMode="cover"
                                    size={35}
                                    style={styles.bubbleImg}
                                />
                            </SharedElement>
                            <Text style={styles.categoryBtnTxt}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default HorizontalCircle