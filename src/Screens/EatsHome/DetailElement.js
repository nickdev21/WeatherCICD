import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SharedElement } from 'react-navigation-shared-element';

const DetailElement = (props) => {
    console.log(props.route.params, "Here it is");
    const item = props.route.params
    return (
        <SafeAreaView>
            <SharedElement id={item.image} >
                <Image
                    source={item.image}
                    resizeMode="cover"
                    size={35}
                    style={{ height: '100%', width: "100%" }}
                />
            </SharedElement>
        </SafeAreaView>
    )
}

DetailElement.sharedElements = (props) => {
    const item = props.route.params;

    return [
        {
            id: item.image
        }
    ]
}

export default DetailElement