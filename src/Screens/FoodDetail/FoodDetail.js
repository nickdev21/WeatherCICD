import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
// import StarRating from '../../Component/StarRating'
import AntIcon from 'react-native-vector-icons/AntDesign';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { MealPreSafeAreaView } from '../MealPreOrder/MealPreOrderStyle';
import MaterialHeaderComponent from '../Header/MaterialHeaderComponent';
import Swiper from 'react-native-swiper';
import StarRating from '../MealPreOrder/StarRating';




const FoodDetail = () => {
    return (
        <>

            <MealPreSafeAreaView>
                {/* <MaterialHeaderComponent /> */}
                <View style={styles.sliderContainer}>
                    <Swiper
                        autoplay
                        horizontal={true}
                        dot={<View style={{ backgroundColor: '#B9B9B9', width: 15, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
                        activeDot={<View style={{ backgroundColor: 'red', width: 20, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
                        height={200}
                        activeDotColor="#EF3340">
                        <View style={styles.slide}>
                            <Image
                                source={require('../../assets/images/Reservedbackground.png')}
                                resizeMode="cover"
                                style={styles.sliderImage}
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../../assets/images/Recomm2.png')}
                                resizeMode="cover"
                                style={styles.sliderImage}
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../../assets/images/Recomm3.png')}
                                resizeMode="cover"
                                style={styles.sliderImage}
                            />
                        </View>
                    </Swiper>
                    <View style={styles.detailView} >
                        <View style={styles.headingView} >
                            <Text style={styles.itemTitle}>Spicy Veg Noodles</Text>
                            <Image
                                source={require('../../assets/HomeBanner/spice.png')}
                                resizeMode="cover"
                            // style={styles.chillyImg}
                            />
                        </View>
                        <Text style={styles.headDownLine} >Lorem ipsum is simply dummy.....</Text>
                        <StarRating ratings={4} reviews={"4.1/5"} />
                        <Text style={styles.itemSubTitle} >Description</Text>
                        <View style={styles.discriptionSentence}>

                            <Text>Lorem Ipsum is simply dummy Lorem Ipsum
                                is simply dummy text of the printing and simple
                                typeset text of the printing and...  <Text
                                style={styles.shorDisyellow}
                            > read more</Text></Text>
                           
                        </View>


                    </View>
                </View>

            </MealPreSafeAreaView>
        </>
    )
}

export default FoodDetail


const styles = StyleSheet.create({
    sliderContainer: {
        height: 450,
        // backgroundColor: "red",
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        // borderRadius: 8,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        // borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        // borderRadius: 8,
    },
    detailView: {
        marginTop: '2%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    shorDisyellow: {
        fontSize: 12,
        color: '#FFC107',
        marginLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    headingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    headDownLine: {
        marginBottom: 2,
    },
    discriptionSentence: {
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // marginVertical: 10,
    },
    itemTitle: {
        fontWeight: "700",
        color: "#000",
        fontSize: 17,
    },
    itemSubTitle: {
        fontWeight: "600",
        color: "#000",
        marginVertical: 10,
        fontSize: 16,
    },
});
