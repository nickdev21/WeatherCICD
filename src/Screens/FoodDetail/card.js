import { View, Text } from 'react-native'
import React from 'react'

const card = () => {
    return (
        <View>
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
    )
}

export default card