import styled from 'styled-components';

export const HeadderWrapper = styled.View`
flex-direction: row;
align-items: center;
justifyContent: space-between;
height: 6%;
`;

export const IconAndUpdateTextView = styled.View`
flex-direction: row;
flex: 3;
`;

export const TouchableIcon = styled.TouchableOpacity`
margin: 0 5px 0 10px;
`;

export const TouchableUpdateText = styled.TouchableOpacity`
textAlign: center;
width: 90%;

justifyContent: center;
`;

export const HeaderText = styled.Text`
font-size: 20px;
font-family: "DMSans-Bold";
color: #AE282E;
margin: 0 10px;
flex: 3;
`;

export const HeaderMaterialText = styled.Text`
font-size: 16px;
font-family: "Arial";
fontWeight: 900;
color: #000;
textAlign: center;
margin: 0 10px;
margin: 0 10px;
flex: 3;
`;

export const RightTextTouchable = styled.TouchableOpacity`
flex-direction: row;
justifyContent: center;
align-items: center;

`;

export const HeaderRightText = styled.Text`
    font-size: 15px;
    font-family: "DMSans-Medium";
    /* color: ${props => props.secondPropcolor}; */
    margin: 0 10px 0 2px;
`;
