import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';

interface ITextInput extends TextInputProps {}

const styles = StyleSheet.create({
  stylesInput: {
    height: 50,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 20,
    fontFamily: 'Montserrat',
  },
});

const Input: React.FC<ITextInput> = ({...props}) => {
  return (
    <View>
      <TextInput
        style={styles.stylesInput}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
};

export default Input;
