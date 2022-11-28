import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Fonts, Constants} from '../../global/index';

export const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mainScreen: {
    height: Constants.SCREEN_HEIGHT,
    width: Constants.SCREEN_WIDTH,
    marginTop: 20,
  },
  quickLink: {
    fontSize: Fonts.SIZE_16,
    // fontFamily: Fonts.BOLD,
    fontWeight: '700',
    // marginBottom: -5,
    color: Colors.BLACK,
  },
  bubbleContainer: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  font1: {
    fontFamily: Fonts.LIGHT,
    fontWeight: '400',
    fontSize: 12,
    color: Colors.GRAY_DARK,
  },
  font2: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: Fonts.SIZE_15,
    color: Colors.YELLOW,
  },
  seeAllStyle: {
    justifyContent: 'flex-end',
  },
  headingContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
