import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MaterialHeaderComponent from '../Header/MaterialHeaderComponent'
import { CardDetailView, CardImage, CardItemView, CardsWrapper, CardTimeText, cardTimeText, CardTImeView, CardTitle, CardView, IconView, ItemText, MealPreSafeAreaView, PayCTA, PaymentMethodsItemView, PaymentMethodsView, RadioUp, RadioView, RadoiTouch, VisaView } from './MealPaymentStyle.js'
import FormButton from './FormButton';
import visa from './Images/visa.png'
import card from './Images/card.png'
import paypal from './Images/paypal.png'
import google from './Images/google.png'



const MealPayment = () => {

    const [radioView, setradioView] = useState(false)

    const onPressRadio = () => {
        setradioView(!radioView)
    }
    return (
        <MealPreSafeAreaView>

            <MaterialHeaderComponent materialText={"Payment"} />

            {/* <View style={styles.cardsWrapper}> */}
            <CardsWrapper>

                <CardView>
                    <CardTitle>
                        Saved Cards
                    </CardTitle>
                    <CardItemView>
                        <CardDetailView>
                            <ItemText>Jhon Doe</ItemText>
                            <ItemText>**** **** **** 3947</ItemText>
                            <CardTImeView>
                                <CardTimeText>Added on 10/2018</CardTimeText>
                                <CardTimeText>Expires on 10/2021</CardTimeText>
                            </CardTImeView>
                        </CardDetailView>
                        <VisaView>
                            <CardImage source={visa} />
                        </VisaView>
                        <RadioUp>
                            <RadoiTouch onPress={onPressRadio}>
                                {
                                    radioView &&
                                    <RadioView>
                                    </RadioView>
                                }
                            </RadoiTouch>
                        </RadioUp>
                    </CardItemView>
                </CardView>

                <PaymentMethodsView>
                    <CardTitle>
                        Payment Methods
                    </CardTitle>
                    <PaymentMethodsItemView>
                        <IconView>
                            <CardImage source={card} />
                        </IconView>
                        <ItemText>Add a credit/debit card</ItemText>
                        <RadoiTouch onPress={onPressRadio}>
                            {
                                radioView &&
                                <RadioView>
                                </RadioView>

                            }
                        </RadoiTouch>
                    </PaymentMethodsItemView>
                    <PaymentMethodsItemView>
                        <IconView>
                            <CardImage source={paypal} />
                        </IconView>
                        <ItemText>PayPal</ItemText>
                        <RadoiTouch onPress={onPressRadio}>
                            {
                                radioView &&
                                <RadioView>
                                </RadioView>

                            }
                        </RadoiTouch>
                    </PaymentMethodsItemView>
                    <PaymentMethodsItemView>
                        <IconView>
                            <CardImage source={google} />
                        </IconView>
                        <ItemText>Google Pay</ItemText>
                        <RadoiTouch onPress={onPressRadio}>
                            {
                                radioView &&
                                <RadioView>
                                </RadioView>

                            }
                        </RadoiTouch>
                    </PaymentMethodsItemView>
                </PaymentMethodsView>
                <PayCTA>
                    <FormButton
                        buttonTitle="Pay Now"
                        onPress={() => { }}
                    />
                </PayCTA>
            </CardsWrapper>
        </MealPreSafeAreaView>
    )
}

export default MealPayment

