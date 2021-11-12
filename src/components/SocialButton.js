import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import metrics from '../theme/Metrics';
import fonts from '../theme/Fonts';

const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: metrics.windowWidth / 1.1,
    height: metrics.windowHeight / 15,
    borderRadius: 5,
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: fonts.size.font20,
    fontWeight: fonts.weight.bold,
    fontFamily: fonts.type.montserratRegular,
  },
});