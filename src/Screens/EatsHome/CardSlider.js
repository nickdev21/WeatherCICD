import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, StatusBar, ImageBackground, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './HomeStyle';



const { width } = Dimensions.get('window');
const itemWidth = (width / 3) * 2;
const gap = (width - itemWidth) / 4;

const CardSlider = () => {
    return (
        <ScrollView
            horizontal
            pagingEnabled
            decelerationRate="fast"
            contentContainerStyle={styles.scrollView}
            showsHorizontalScrollIndicator={false}
            snapToInterval={itemWidth + gap}
        >
            {[1, 2, 3, 4, 5].map(x => (
                <TouchableOpacity key={x} style={styles.item} activeOpacity={0.6} >
                    <Image
                        source={require('./Images/sliderImg.png')}
                        resizeMode="cover"
                        style={styles.uniqueSliderIMg}
                    />
                </TouchableOpacity>
            ))}
        </ScrollView>)
}

export default CardSlider