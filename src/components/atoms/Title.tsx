import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

interface ITitle {
  title: string;
  color: string;
  fontStyle?: any;
  fontWeight: any;
  fontSize: number;
  textAlign?: any;
}

const styles = StyleSheet.create({
  styleTitle: {
    fontFamily: 'Montserrat',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

const Typography: React.FC<ITitle> = ({
  title,
  color,
  fontStyle,
  fontWeight,
  fontSize,
  textAlign,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={{
          ...styles.styleTitle,
          color,
          fontStyle,
          fontWeight,
          fontSize,
          textAlign,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Typography;
