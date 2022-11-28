import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
// import MaterialHeaderComponent from '../Header/MaterialHeaderComponent'
import { MealPreSafeAreaView } from './YourMealStyle.js'
import AntIcon from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FormButton from './FormButton';



const YourMeal = () => {
    return (
        <MealPreSafeAreaView>

            {/* <MaterialHeaderComponent materialText={"Your Meal"} /> */}
            <ScrollView style={styles.scrollView} >

                <View style={styles.cardsWrapper}>
                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image
                                source={require('../../assets/HomeBanner/food1.png')}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View>
                        <View style={styles.cardInfo}>
                            <TouchableOpacity style={styles.croosIcon}>
                                <MIcon name="cancel" size={16} color="#EF3340" />
                            </TouchableOpacity>
                            <View style={styles.nameAndImage}>
                                <Text style={styles.cardTitle}>Spicy Veg Noodles</Text>
                            </View>
                            <View style={styles.yellowMore} >
                                <Text style={styles.shorDis} > lorem ipsum is simpley dummy....</Text>
                            </View>
                            <View style={styles.CtaButton} >
                                <View style={styles.QtyCounter} >
                                    <TouchableOpacity style={styles.plusIcon} >
                                        <AntIcon name="plus" size={18} color="#000" />
                                    </TouchableOpacity>
                                    <Text style={styles.count} >0</Text>
                                    <TouchableOpacity style={styles.negativeIcon}>
                                        <AntIcon name="minus" size={18} color="#000" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.cardDetails}>
                                    S$ 100.00
                                </Text>
                            </View>
                            <View style={styles.subCta}  >
                                <TouchableOpacity style={styles.customizable}>
                                    <Text style={styles.custonText} >Customisable Meal</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <FormButton
                        buttonTitle="Pay Now"
                        onPress={() => { }}
                    />
                    <Text style={styles.inclineText} >Save up to 5% on final bill</Text>
                    <FormButton
                        buttonTitle="Pay Later"
                        onPress={() => { }}
                    />
                </View>
            </ScrollView>
        </MealPreSafeAreaView>
    )
}

export default YourMeal


const styles = StyleSheet.create({

    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
        paddingBottom: 20,
    },
    scrollView: {
        paddingBottom: 50,
    },
    card: {
        height: 150,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 8,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 20,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        // borderColor: '#ccc',
        // borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: "600",
        color: "#000",
        fontSize: 17,
    },
    cardDetails: {
        fontSize: 14,
        color: '#444',
        // marginTop: 10,
        paddingTop: 20,
        fontWeight: "500",
    },
    shorDis: {
        fontSize: 12,
        // color: '#444',
        paddingTop: 5,
        paddingBottom: 5,
    },
    yellowMore: {
        flexDirection: 'row',
    },
    CtaButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subCta: {
        padding: 5,
        marginVertical: 5,
        justifyContent: 'flex-start',
        alignItems: "flex-start",
    },
    customizable: {
        backgroundColor: "#FED6D3",
        justifyContent: 'center',
        borderRadius: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    custonText: {
        color: "#000",
        fontWeight: "600",
    },
    nameAndImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    QtyCounter: {
        backgroundColor: "#ffffff",
        width: "40%",
        borderRadius: 12,
        // paddingHorizontal: 5,
        // paddingVertical: 12,
        shadowColor: '#999',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 8,
        // padding: 2,
        margin: 2,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    plusIcon: {
        // backgroundColor: "yellow",
        // width: "33%",
        justifyContent: 'center',
        // padding: 10,
        alignItems: 'center',
    },
    count: {
        // width: "33%",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        // padding: 10,
        fontSize: 18,
    },
    negativeIcon: {
        // padding: 10,
        // width: "33%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    inclineText: {
        alignSelf: 'center',
        margin: 10,
        paddingBottom: 15,
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: '600',
    },
    croosIcon: {
        position: 'absolute',
        left: '8%',
        padding: 3,
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
});

