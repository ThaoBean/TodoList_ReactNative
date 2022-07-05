import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import ButtonCustom from '../components/atoms/Button';
import Typography from '../components/atoms/Title';

interface IWelcomePage {}

const WelcomePage: React.FC<IWelcomePage> = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/background_welcome.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.centerImg}>
          <Image
            resizeMode="cover"
            source={require('../images/now-logo.png')}
          />
        </View>
        <View style={styles.typo}>
          <Typography
            title="News Time App"
            color="white"
            fontWeight="400"
            fontSize={40}
            textAlign="center"
          />
        </View>
        <View style={styles.centerImg}>
          <Image
            resizeMode="cover"
            source={require('../images/designBy.png')}
          />
        </View>
        <View style={styles.stylesLogo}>
          <Image resizeMode="cover" source={require('../images/logos.png')} />
        </View>
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
  },
  stylesBtn: {
    marginTop: 10,
  },
  stylesLogo: {
    marginTop: 100,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  centerImg: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  typo: {
    marginTop: 100,
  },
});

export default WelcomePage;
