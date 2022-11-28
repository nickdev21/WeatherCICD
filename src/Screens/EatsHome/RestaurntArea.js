import { Dimensions, ScrollView, StyleSheet, View, Animated, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './HomeStyle';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import CardAnimate from './CardAnimate';
import CardThinAnimate from './CardThinAnimate';


const { width } = Dimensions.get('window');
const itemWidth = (width / 3) * 2;
const gap = (width - itemWidth) / 4;

const ResturantArea = () => {

    const renderItem = ({ item }) => (
        <CardThinAnimate />
    );


    return (
        <>
            <View style={styles.FeaturedWrapper} >
                <View style={styles.featureText}>
                    <View>
                        <Text style={styles.cusineTxt} >Restaurants by Areas</Text>
                        <Text style={styles.featureSmalltxt} >New Restaurants nearby your Area !</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} >
                        <Text style={styles.yellowText} >See All</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View
                style={styles.TwoCard}
            >
                <FlatList
                    numColumns={2}
                    data={[1, 2, 3, 4, 5]}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                {/* <CardThinAnimate />
                <CardThinAnimate /> */}
            </View>
        </>
    )
}

export default ResturantArea



