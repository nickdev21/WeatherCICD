import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { connect } from 'react-redux';
import BellSvg from "../../assets/svg/bell.svg"
import HomeHeaderImg from "../../assets/images/homeheader.jpeg"
import { Colors, Fonts, ScreenNames } from '../../global';

const HomeHeader = ({ name }) => {
    const navigation = useNavigation()
    return (
        <ImageBackground imageStyle={{borderBottomLeftRadius: 25, borderBottomRightRadius: 25}} source={HomeHeaderImg} style={styles.HeaderContainer}>
            <View>
                <Text style={styles.font2}>{name ? "Hi " + name : "Hi Guest"}</Text>

                <Text style={styles.font3}>Let's see, what's new!</Text>
            </View>

            <View>
                {/* <View style={styles.smallCircle}>
                    <Text style={styles.font1}>3</Text>
                </View> */}
                <TouchableOpacity onPress={() => {
                    navigation.navigate(ScreenNames.NOTIFICATION_SCREEN)
                }} style={{}}>
                    {/* <BellSvg /> */}
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
// const mapStateToProps = state => ({
//     name: state.user.name
// });

const mapDispatchToProps = dispatch => ({ dispatch });
// export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader)

const styles = StyleSheet.create({
    smallCircle: {
        height: 15,
        width: 15,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: Colors.WHITE,
        backgroundColor: Colors.PRIMARY,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1
    },
    font1: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 9,
        color: Colors.WHITE
    },
    font2: {
        fontFamily: Fonts.BOLD,
        fontSize: 23,
        color: Colors.BLACK
    },
    font3: {
        fontFamily: Fonts.LIGHT,
        fontSize: 13,
        color: Colors.GRAY_DARK
    },
    HeaderContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // marginHorizontal: 20,
        height: 145,
        backgroundColor: Colors.TRANSPARENT
    }
})
