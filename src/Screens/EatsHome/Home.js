import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, StatusBar, ImageBackground, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './HomeStyle';
import HomeHeader from './HomeHeader';
import HorizontalCircle from './HorizontalCircle';
import CardSlider from './CardSlider';
import Search from './Search';
import FeaturedResturant from './FeaturedResturant';
import ResturantArea from './RestaurntArea';
import Recommendations from './Recommendations';


const Home = () => {
    return (
        <ScrollView style={styles.HomeWrapper}>
            {/* <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} /> */}
            <HomeHeader />
            <Search />
            <HorizontalCircle />
            <FeaturedResturant />
            <CardSlider />
            <ResturantArea />
            <Recommendations />
        </ScrollView>
    )
}

export default Home