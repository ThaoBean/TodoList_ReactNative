import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native';
interface ITouchableOpacity extends TouchableOpacityProps {
  onPress?: () => void;
  labelBtn: string;
  fontSize: number;
  backgroundColor: string;
  fontWeight: any;
  color: string;
  borderRadius?: number;
  lineHeight?: number;
}

const ButtonCustom: React.FC<ITouchableOpacity> = ({
  onPress,
  labelBtn,
  fontSize,
  backgroundColor,
  borderRadius,
  fontWeight,
  color,
  lineHeight = 50,
}) => {
  return (
    <TouchableOpacity
      style={{backgroundColor, borderRadius, ...styles.btn}}
      onPress={onPress}>
      <Text
        style={{...styles.btnText, fontSize, fontWeight, color, lineHeight}}>
        {labelBtn}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    opacity: 1,
  },
  btnText: {
    fontFamily: 'Montserrat',
    textAlign: 'center',
  },
});

export default ButtonCustom;
