import React from 'react';
import {
  StyleSheet,
  View,
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
}

const ButtonCustom: React.FC<ITouchableOpacity> = ({
  onPress,
  labelBtn,
  fontSize,
  backgroundColor,
  borderRadius,
  fontWeight,
  color,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{backgroundColor, borderRadius, ...styles.btn}}
        onPress={onPress}>
        <Text style={{...styles.btnText, fontSize, fontWeight, color}}>
          {labelBtn}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    opacity: 1,
  },
  btnText: {
    fontFamily: 'Montserrat',
    lineHeight: 50,
    textAlign: 'center',
  },
});

export default ButtonCustom;
