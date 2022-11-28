import { Dimensions, ScrollView, StyleSheet, View, Animated, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './HomeStyle';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import CardAnimate from './CardAnimate';


const { width, height } = Dimensions.get('window');
const itemWidth = (width / 3) * 2;
const gap = (width - itemWidth) / 4;
const ITEM_SIZE = width * 1;
const SPACNIG = 10;

const FeaturedResturant = () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const renderItem = ({ item, index }) => {
        const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
        ]
        // const translateY = scrollX.interpolate({
        //     inputRange,
        //     outputRange: [0, 50, 0]
        // })
        const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [-100, -30, -100],
            extrapolate: 'clamp',
        });

        return <View style={{ width: ITEM_SIZE }} >
            <Animated.View style={{ alignItems: 'center', padding: SPACNIG, transform: [{ translateY }] }} >
            {/* <Animated.View style={{
                marginHorizontal: SPACING,
                padding: SPACING * 2,
                alignItems: 'center',
                transform: [{ translateY }],
                backgroundColor: 'white',
                borderRadius: 20,
                elevation: 8,
                height: 280
            }} > */}
                <CardAnimate />
            </Animated.View>
            {/* <View>
                <Text>Nick</Text>
            </View> */}
        </View>

    }


    return (
        <>
            <View style={styles.FeaturedWrapper} >
                <View style={styles.featureText}>
                    <View>
                        <Text style={styles.cusineTxt} >Featured Resturants</Text>
                        <Text style={styles.featureSmalltxt} >Restaurant Features you may interest in !</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} >
                        <Text style={styles.yellowText} >See All</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={styles.cardSliderWrapper}
            >
                <Animated.FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    snapToInterval={ITEM_SIZE}
                    decelerationRate={0}
                    bounces={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )}
                    scrollEventThrottle={16}
                    contentContainerStyle={{ alignItems: 'center', borderWidth: 2, borderColor: "#000" }}
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 8]}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}

export default FeaturedResturant



