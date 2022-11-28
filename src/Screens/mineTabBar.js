import React from 'react'
import {
    SafeAreaView,
    View,
    StatusBar,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    StyleSheet,
    Image,
    Pressable,
    ScrollView,
} from 'react-native';
const { width } = Dimensions.get('screen');

const categoryList = ['Popular', 'Recommended', 'Nearest'];
const MineTabBar = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const [dataItem, setdataItem] = React.useState("one");

    const showActiveData = (index) => {
        setSelectedCategoryIndex(index)
        console.log(index, "THIS ONE IS INEDX");
        if (index === 0) {
            setdataItem("Upcoming")
        } else if (index === 1) {
            setdataItem("Work In Progress")
        } else if (index === 2) {
            setdataItem("Over Due")
        }
    }
    return (
        <View style={style.Wrapper}>
            <View style={style.categoryListContainer}>
                {categoryList.map((category, index) => (

                    <Pressable
                        key={index}
                        onPress={() => showActiveData(index)}>
                        <View
                            // style={style.midlleView}
                            style={[
                                style.midlleView,
                                index == selectedCategoryIndex && style.activemidlleView,
                            ]}
                        >
                            <Text
                                style={[
                                    style.categoryListText,
                                    index == selectedCategoryIndex && style.activeCategoryListText,
                                ]}>
                                {category}
                            </Text>
                        </View>
                    </Pressable>
                ))}
            </View>
            <View>
                <Text>{dataItem}</Text>
            </View>
        </View>
    );
};

export default MineTabBar

const style = StyleSheet.create({

    Wrapper: {
        flex: 1,
    },
    categoryListContainer: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        width: "90%",
        height: "3.5%",
        margin: "2%",
        borderRadius: 100,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,

    },
    categoryListText: {
        borderRadius: 100,
        // width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#8C8C8C",

    },
    activeCategoryListText: {
        borderRadius: 100,
        // width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#FFFFFF",
    },
    midlleView: {
        width: "100%",
        borderRadius: 100,
        paddingHorizontal: " 3%",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    activemidlleView: {
        height: "100%",
        width: "100%",
        backgroundColor: "#004A7F",
        borderRadius: 100,
        // padding: "3%",
        paddingHorizontal: " 3%",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
});