import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ButtonCustom from '../components/atoms/Button';
import Typography from '../components/atoms/Title';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface IWelcomePage {}

const WelcomePage: React.FC<IWelcomePage> = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Typography
          title="Sweava"
          color="white"
          fontWeight="800"
          fontSize={45}
          textAlign="center"
        />
      </View>
      <View style={styles.centerImg}>
        <Image resizeMode="cover" source={require('../images/welcome.png')} />
      </View>
      <View style={styles.stylesBtn}>
        <ButtonCustom
          labelBtn="GET STARTED"
          fontSize={20}
          backgroundColor="white"
          fontWeight="700"
          color="#5956E9"
          borderRadius={20}
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5956E9',
  },
  title: {
    marginTop: 20,
  },
  stylesBtn: {
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  centerImg: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default WelcomePage;
