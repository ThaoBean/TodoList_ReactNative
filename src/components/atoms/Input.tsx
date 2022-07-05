import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface ITextInput extends TextInputProps {
  err?: any;
}

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
  styleErr: {
    fontFamily: 'Montserrat',
    color: 'red',
    fontWeight: '400',
    fontSize: 13,
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 10,
  },
  styleInputErr: {
    height: 50,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 20,
    fontFamily: 'Montserrat',
  },
});

const Input: React.FC<ITextInput> = ({err, ...props}) => {
  return (
    <View>
      <TextInput
        style={!err ? styles.stylesInput : styles.styleInputErr}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        {...props}
      />
      {err && <Text style={styles.styleErr}>{err}</Text>}
    </View>
  );
};

export default Input;
