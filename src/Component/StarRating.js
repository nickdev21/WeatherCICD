import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';

const StarRating = (props) => {
    // This array will contain our star tags. We will include this
    // array between the view tag.
    let stars = [];
    // Loop 5 times
    for (var i = 1; i <= 5; i++) {
        // set the path to filled stars
        let name = 'star';
        // If ratings is lower, set the path to unfilled stars
        if (i > props.ratings) {
            name = 'staro';
        }

        stars.push(<AntIcons name={name} size={15} style={styles.star} key={i} />);
    }

    return (
        <View style={styles.container}>
        <View style={styles.spaceStar} >
            {stars}
        </View>
            <Text style={styles.text}>({props.reviews})</Text>
        </View>
    );
};

export default StarRating;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        color: '#FF8C00',
        marginRight: 10,
    },
    spaceStar: {
        flexDirection: 'row',

    },
    text: {
        fontSize: 12,
        marginLeft: 5,
        // color: '#444',
    },
});
