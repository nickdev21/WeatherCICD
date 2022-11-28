import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { HeadderWrapper, TouchableIcon, HeaderText, HeaderRightText, RightTextTouchable, HeaderMaterialText, TouchableUpdateText, IconAndUpdateTextView } from './HeaderStyle'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';



const MaterialHeaderComponent = (
    {
        goBack = () => { },
        text,
        rightText,
        headerRightTextColor,
        materialText,
        showBulkOption,
        handelOutsidePress,
    }
) => {
   
    return (
        <HeadderWrapper>
                <>
                    <IconAndUpdateTextView>
                        <TouchableIcon onPress={() => {}} >
                            <MaterialIcon name="keyboard-arrow-left" size={26} color="#979797" />
                        </TouchableIcon>
                        <TouchableUpdateText onPress={() => {}} >
                            <HeaderMaterialText>{materialText}</HeaderMaterialText>
                        </TouchableUpdateText>
                    </IconAndUpdateTextView>
                </>
           
            <Text />
        </HeadderWrapper>
    )
}

export default MaterialHeaderComponent