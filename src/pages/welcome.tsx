import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import ButtonCustom from '../components/atoms/Button';
import Typography from '../components/atoms/Title';

interface IWelcomePage {}

const WelcomePage: React.FC<IWelcomePage> = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/564x/f7/99/55/f7995548892207406d6ba022aebc0948.jpg',
        }}
        resizeMode="cover"
        style={styles.image}>
        <Typography
          title="TO DO LISTS"
          color="#F96332"
          fontWeight="400"
          fontSize={37}
          textAlign="center"
        />
        <View style={styles.stylesBtn}>
          <ButtonCustom
            labelBtn="GET STARTED"
            fontSize={12}
            backgroundColor="#F96332"
            fontWeight="400"
            color="white"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  stylesBtn: {
    marginTop: 130,
  },
});

export default WelcomePage;
