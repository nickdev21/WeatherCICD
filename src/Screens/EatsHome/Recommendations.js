import { Dimensions, ScrollView, StyleSheet, View, Animated, Text, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './HomeStyle';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import CardAnimate from './CardAnimate';
import CardThinAnimate from './CardThinAnimate';
import CardRecommend from './CardRecommend';


const { width } = Dimensions.get('window');
const itemWidth = (width / 3) * 2;
const gap = (width - itemWidth) / 4;

const Recommendations = () => {

    const renderItem = ({ item, index }) => {
        if (index % 2 === 0) {
            if (index === 0) {
                return <TouchableOpacity style={styles.RecommendCardZero} activeOpacity={0.7}>
                    <ImageBackground imageStyle={{ borderRadius: 15, }} source={require('./Images/Recomm2.png')} style={styles.recommendedsliderImg}>
                        <View style={styles.downTheText} >
                            <Text style={styles.recomendHeadTxt} >Snacks to enjoy!</Text>
                            <Text style={styles.recomendSubHeadTxt} >30 Places</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>

            } else {
                return <TouchableOpacity style={styles.RecommendCard} activeOpacity={0.7}>
                    <ImageBackground imageStyle={{ borderRadius: 15, }} source={require('./Images/Recomm3.png')} style={styles.recommendedsliderImg}>
                        <View style={styles.downTheText} >
                            <Text style={styles.recomendHeadTxt} >Snacks to enjoy!</Text>
                            <Text style={styles.recomendSubHeadTxt} >30 Places</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            }


        } else {
            return <TouchableOpacity style={styles.alternateRecommendCard} activeOpacity={0.7}>
                <ImageBackground imageStyle={{ borderRadius: 15, }} source={require('./Images/Recomm1.png')} style={styles.recommendedsliderImg}>
                    <View style={styles.downTheText} >
                        <Text style={styles.recomendHeadTxt} >Newly opened</Text>
                        <Text style={styles.recomendSubHeadTxt} >30 Places</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        }
    }




    return (
        <>
            <View style={styles.FeaturedWrapper} >
                <View style={styles.featureText}>
                    <View>
                        <Text style={styles.cusineTxt} >Recommendations</Text>
                        <Text style={styles.featureSmalltxt} >Some of the best recommendations for you !</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} >
                        <Text style={styles.yellowText} >See All</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View
                style={styles.RecommendTwoCard}
            >
                <FlatList
                    numColumns={2}
                    data={[1, 2, 3, 4, 5,6,7,8,8]}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}

export default Recommendations



