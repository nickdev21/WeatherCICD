import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import MaterialHeaderComponent from '../Header/MaterialHeaderComponent'
import { MealPreSafeAreaView } from './MealPreOrderStyle.js'
// import StarRating from '../../Component/StarRating'
import StarRating from './StarRating'
import AntIcon from 'react-native-vector-icons/AntDesign';



const MealPreOrder = () => {
    return (
        <MealPreSafeAreaView>

            <MaterialHeaderComponent materialText={"Urban Tadka Dining"} />
            <ScrollView>
                <View style={styles.searchWrapper}>
                    <View style={styles.makeRowtheSearch} >
                        <AntIcon style={styles.SearchIcon} name="search1" size={20} color="#AE282E" />
                        <TextInput style={styles.textInSearch} placeholder='Cuisine, or a dish' />
                    </View>
                </View>

                <View style={styles.cardsWrapper}>
                    <Text
                        style={{
                            // alignSelf: 'center',
                            fontSize: 18,
                            color: '#333',
                            fontWeight: 'bold',
                        }}>
                        Recommendent (10)
                    </Text>
                    {/* <View style={styles.card}></View> */}
                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image
                                source={require('../../assets/HomeBanner/food1.png')}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View>
                        <View style={styles.cardInfo}>
                            <View style={styles.nameAndImage}>
                                <Text style={styles.cardTitle}>Spicy Veg Noodles</Text>
                                <Image
                                    source={require('../../assets/HomeBanner/spice.png')}
                                    resizeMode="cover"
                                    style={styles.chillyImg}
                                />


                            </View>
                            <View style={styles.yellowMore} >
                                <Text style={styles.shorDis} > Spicy-Veg paneer...</Text>
                                <Text style={styles.shorDisyellow} > read more</Text>
                            </View>
                            <StarRating ratings={4} reviews={"4.1/5"} />
                            <View style={styles.CtaButton} >
                                <Text style={styles.cardDetails}>
                                    S$ 100.00
                                </Text>
                                <View style={styles.subCta}  >
                                    <TouchableOpacity style={styles.add}>
                                        <Text style={styles.TextAdd}>+ ADD</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.customizable}>
                                        <Text>Customisable</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image
                                source={require('../../assets/HomeBanner/food2.png')}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View>
                        <View style={styles.cardInfo}>
                            <View style={styles.nameAndImage}>
                                <Text style={styles.cardTitle}>Spicy Veg Noodles</Text>
                                <Image
                                    source={require('../../assets/HomeBanner/spice.png')}
                                    resizeMode="cover"
                                    style={styles.chillyImg}
                                />


                            </View>
                            <View style={styles.yellowMore} >
                                <Text style={styles.shorDis} > Spicy-Veg paneer...</Text>
                                <Text style={styles.shorDisyellow} > read more</Text>
                            </View>
                            <StarRating ratings={4} reviews={"4.1/5"} />
                            <View style={styles.CtaButton} >
                                <Text style={styles.cardDetails}>
                                    S$ 100.00
                                </Text>
                                <View style={styles.subCta}  >
                                    <TouchableOpacity style={styles.add}>
                                        <Text style={styles.TextAdd}>+ ADD</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.customizable}>
                                        <Text>Customisable</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image
                                source={require('../../assets/HomeBanner/food1.png')}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View>
                        <View style={styles.cardInfo}>
                            <View style={styles.nameAndImage}>
                                <Text style={styles.cardTitle}>Spicy Veg Noodles</Text>
                                <Image
                                    source={require('../../assets/HomeBanner/spice.png')}
                                    resizeMode="cover"
                                    style={styles.chillyImg}
                                />


                            </View>
                            <View style={styles.yellowMore} >
                                <Text style={styles.shorDis} > Spicy-Veg paneer...</Text>
                                <Text style={styles.shorDisyellow} > read more</Text>
                            </View>
                            <StarRating ratings={4} reviews={"4.1/5"} />
                            <View style={styles.CtaButton} >
                                <Text style={styles.cardDetails}>
                                    S$ 100.00
                                </Text>
                                <View style={styles.subCta}  >
                                    <TouchableOpacity style={styles.add}>
                                        <Text style={styles.TextAdd}>+ ADD</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.customizable}>
                                        <Text>Customisable</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image
                                source={require('../../assets/HomeBanner/food1.png')}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View>
                        <View style={styles.cardInfo}>
                            <View style={styles.nameAndImage}>
                                <Text style={styles.cardTitle}>Spicy Veg Noodles</Text>
                                <Image
                                    source={require('../../assets/HomeBanner/spice.png')}
                                    resizeMode="cover"
                                    style={styles.chillyImg}
                                />


                            </View>
                            <View style={styles.yellowMore} >
                                <Text style={styles.shorDis} > Spicy-Veg paneer...</Text>
                                <Text style={styles.shorDisyellow} > read more</Text>
                            </View>
                            <StarRating ratings={4} reviews={"4.1/5"} />
                            <View style={styles.CtaButton} >
                                <Text style={styles.cardDetails}>
                                    S$ 100.00
                                </Text>
                                <View style={styles.subCta}  >
                                    <TouchableOpacity style={styles.add}>
                                        <Text style={styles.TextAdd}>+ ADD</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.customizable}>
                                        <Text>Customisable</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image
                                source={require('../../assets/HomeBanner/food1.png')}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View>
                        <View style={styles.cardInfo}>
                            <View style={styles.nameAndImage}>
                                <Text style={styles.cardTitle}>Spicy Veg Noodles</Text>
                                <Image
                                    source={require('../../assets/HomeBanner/spice.png')}
                                    resizeMode="cover"
                                    style={styles.chillyImg}
                                />


                            </View>
                            <View style={styles.yellowMore} >
                                <Text style={styles.shorDis} > Spicy-Veg paneer...</Text>
                                <Text style={styles.shorDisyellow} > read more</Text>
                            </View>
                            <StarRating ratings={4} reviews={"4.1/5"} />
                            <View style={styles.CtaButton} >
                                <Text style={styles.cardDetails}>
                                    S$ 100.00
                                </Text>
                                <View style={styles.subCta}  >
                                    <TouchableOpacity style={styles.add}>
                                        <Text style={styles.TextAdd}>+ ADD</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.customizable}>
                                        <Text>Customisable</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image
                                source={require('../../assets/HomeBanner/food2.png')}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View>
                        <View style={styles.cardInfo}>
                            <View style={styles.nameAndImage}>
                                <Text style={styles.cardTitle}>Spicy Veg Noodles</Text>
                                <Image
                                    source={require('../../assets/HomeBanner/spice.png')}
                                    resizeMode="cover"
                                    style={styles.chillyImg}
                                />


                            </View>
                            <View style={styles.yellowMore} >
                                <Text style={styles.shorDis} > Spicy-Veg paneer...</Text>
                                <Text style={styles.shorDisyellow} > read more</Text>
                            </View>
                            <StarRating ratings={4} reviews={"4.1/5"} />
                            <View style={styles.CtaButton} >
                                <Text style={styles.cardDetails}>
                                    S$ 100.00
                                </Text>
                                <View style={styles.subCta}  >
                                    <TouchableOpacity style={styles.add}>
                                        <Text style={styles.TextAdd}>+ ADD</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.customizable}>
                                        <Text>Customisable</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </MealPreSafeAreaView>
    )
}

export default MealPreOrder


const styles = StyleSheet.create({

    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 150,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
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
        // backgroundColor: 'red',
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
    },
    shorDis: {
        fontSize: 12,
        // color: '#444',
        paddingTop: 5,
        paddingBottom: 5,
    },
    shorDisyellow: {
        fontSize: 12,
        color: '#FFC107',
        marginLeft: 10,
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
        paddingLeft: 30,
        paddingRight: 30,
        // justifyContent: 'space-between',
        // alignSelf: 'center',
    },
    add: {
        backgroundColor: "#EF3340",
        padding: 7,
        paddingLeft: 7,
        paddingRight: 7,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 5,
        borderRadius: 5,
    },
    customizable: {
        backgroundColor: "#FED6D3",
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },
    TextAdd: {
        fontSize: 15,
        fontWeight: "bold",
        color: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    nameAndImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchWrapper: {
        // flexDirection: "row",
        alignContent: "center",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    makeRowtheSearch: {
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 8,
        flexDirection: "row",
        // justifyContent: 'center',
        alignContent: "center",
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    SearchIcon: {
        paddingRight: 10,
    },
    textInSearch: {
        paddingRight: 10,
    },

});

