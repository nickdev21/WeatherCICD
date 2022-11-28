import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 14,
    backgroundColor: '#EF3340',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    // shadowColor: 'rgba(46, 229, 157, 0.4  )',
    // shadowOpacity: 1.5,
    // elevation: 8,
    // shadowRadius: 20 ,
    shadowOffset: { width: 1, height: 13 },
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '900',
    fontFamily: 'Arial',
    // textTransform: 'uppercase',
    letterSpacing: 1,
  },
});