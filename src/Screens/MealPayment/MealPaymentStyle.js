import styled from 'styled-components';

export const MealPreSafeAreaView = styled.SafeAreaView`
  flex: 1;
  backgroundColor:#FFFFFF ;
  `;

export const CardsWrapper = styled.View`
marginTop: 20px;
width: 90%;
alignSelf: center;
paddingBottom: 20px;
flex: 1;
  `;

export const PaymentMethodsView = styled.View`
marginTop: 15%;
  `;

export const CardView = styled.View`
  `;

export const PayCTA = styled.View`
position: absolute;
width: 100%;
bottom:2%;
left:0;
  `;

export const CardItemView = styled.View`
flexDirection: row;
backgroundColor: #ffff;
justifyContent: space-between;
height: 120px;
alignItems: center;
margin: 3% 0;
padding: 2.5% 2.5%;
shadowColor: #999;
shadowOpacity: 0.2;
/* shadowOffset:1px ; */
shadowRadius:20px;
elevation:50;
borderRadius: 5px;
marginTop: 5%;
`;

export const CardDetailView = styled.View`
width: 65%;
height: 100%;
justifyContent: space-around;
  `;

export const CardTImeView = styled.View`
flexDirection: row;
justifyContent: space-between;
  `;

export const RadioUp = styled.View`
height: 100%;
  `;

export const PaymentMethodsItemView = styled.View`
backgroundColor: #FFFFFF ;
flexDirection: row;
justifyContent: space-between;
alignItems: center;
margin: 3% 0;
padding: 2.5% 2.5%;
shadowColor: #999;
shadowOpacity: 0.8;
/* shadowOffset:1px; */
shadowRadius:20px;
elevation: 25;
borderRadius: 5px;
  `;

export const IconView = styled.View`
height: 40px;
width: 40px;
  `;

export const CardImage = styled.Image`
width: 90%;
height: 90%;
  `;

export const VisaView = styled.View`
height: 100px;
width: 100px;
  `;

export const CardTitle = styled.Text`
fontWeight: 700;
color: #000;
fontSize: 17px;
  `;

export const ItemText = styled.Text`
fontWeight: 600;
color: #444;
fontSize: 15px;
width: 60%;
  `;

export const CardTimeText = styled.Text`
margin: 0 5px 0 0;
  `;

export const RadoiTouch = styled.TouchableOpacity`
		height: 22px;
		width: 22px;
		borderRadius: 100px;
		borderWidth: 2px;
		borderColor: #DADADA;
		alignItems: center;
		justifyContent: center;
  `;

export const RadioView = styled.View`
width: 11px;
		height: 11px;
		borderRadius: 50px;
		backgroundColor: #000;
      `;
