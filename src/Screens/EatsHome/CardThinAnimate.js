import { Dimensions, ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './HomeStyle';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';


const CardThinAnimate = () => {
    return (

        <TouchableOpacity style={styles.cardThinSlider} activeOpacity={0.7}>
            <View style={styles.cardSiderImage} >
                <Image
                    source={require('./Images/Corasel1.png')}
                    resizeMode="cover"
                    style={styles.sliderImg}
                />
                <View style={styles.HeartICon} >
                    <TouchableOpacity style={styles.IconCircle} activeOpacity={0.5} >
                        <AntIcon name="heart" size={20} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cardDetail} >
                <Text style={styles.CardHeadingSlider} >Urban Tadka Dining</Text>
                <Text style={styles.cardSubHeading} >Nelson Bridge, Singapore</Text>
                <Text style={styles.cardSubHeading}>Chinese | Asian</Text>
                <View style={styles.ThreeRow} >
                    <View style={styles.flexStartText} >
                        <View style={styles.IconAndText} >
                            <IonIcon name="ios-location-outline" size={18} color="#5A5A5A" />
                            <Text style={styles.smallText} >3 km</Text>
                        </View>
                        <View style={styles.IconAndText}>
                            <View style={styles.MakeCircle} >
                                <FAIcon name="dollar" size={10} color="#5A5A5A" />
                            </View>
                            <Text style={styles.smallText}>Free</Text>
                        </View>
                    </View>
                    <View style={styles.greenBack} >
                        <Text style={styles.WhiteText} >4.1/5</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    )
}

export default CardThinAnimate