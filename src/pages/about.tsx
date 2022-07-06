import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Typography from '../components/atoms/Title';

interface IAbout {}

const About: React.FC<IAbout> = () => {
  const handleCreateAccount = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.title}>
          <Typography
            title="Shopping App for Gadgets and Gifts"
            color="#000"
            fontWeight="700"
            fontSize={40}
            textAlign="center"
          />
        </View>
        <View style={styles.title}>
          <Typography
            title="Get 10% off your first order when you spend over £40 on any product!"
            color="#737373"
            fontWeight="500"
            fontSize={24}
            textAlign="center"
          />
        </View>
        <View style={styles.img}>
          <View style={styles.bgImg}>
            <Image
              resizeMode="cover"
              source={require('../images/Ellipse.png')}
            />
          </View>
          <View style={styles.centerImg}>
            <Image resizeMode="cover" source={require('../images/Sally.png')} />
          </View>
        </View>
        <View style={{marginTop: 100, marginBottom: 20}}>
          <Typography
            title="How the app works"
            color="#000"
            fontWeight="600"
            fontSize={34}
            textAlign="center"
          />
        </View>
        <View style={{marginTop: 20, marginBottom: 20}}>
          <TouchableOpacity onPress={handleCreateAccount}>
            <Typography
              title="Create an account"
              color="#5956E9"
              fontWeight="700"
              fontSize={24}
              textAlign="center"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.title}>
          <Typography
            title="Discover original products"
            color="#000"
            fontWeight="700"
            fontSize={40}
            textAlign="center"
          />
        </View>
        <View style={styles.title}>
          <Typography
            title="There are more than 950 categories updated daily based on trending websites reviews an users rating."
            color="#737373"
            fontWeight="500"
            fontSize={24}
            textAlign="center"
          />
        </View>
        <View style={styles.wrapImg1}>
          <View style={styles.styleImg1}>
            <Image resizeMode="cover" source={require('../images/img1.png')} />
          </View>
        </View>
        <View style={styles.title}>
          <Typography
            title="Experience products in AR"
            color="#000"
            fontWeight="700"
            fontSize={40}
            textAlign="center"
          />
        </View>
        <View style={styles.title}>
          <Typography
            title="Have you tried Augmented Reality? Stop looking at boring galleries and start experiences each item."
            color="#737373"
            fontWeight="500"
            fontSize={24}
            textAlign="center"
          />
        </View>
        <View style={styles.styleExperience}>
          <View style={styles.circlePink}>
            <View style={styles.imgPink}>
              <Image
                resizeMode="cover"
                source={require('../images/mobile.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.title}>
          <Typography
            title="Hottest deals around the web"
            color="#000"
            fontWeight="700"
            fontSize={40}
            textAlign="center"
          />
        </View>
        <View style={styles.title}>
          <Typography
            title="Find the perfect gift or everyday goods right at your fingertips."
            color="#737373"
            fontWeight="500"
            fontSize={24}
            textAlign="center"
          />
        </View>
        <View style={styles.products}>
          <View style={styles.deco1}>
            <Image resizeMode="cover" source={require('../images/Saly1.png')} />
          </View>
          <View style={styles.deco2}>
            <Image resizeMode="cover" source={require('../images/Saly2.png')} />
          </View>
          <View style={styles.wrapImg1}>
            <Image
              resizeMode="cover"
              source={require('../images/mobile2.png')}
            />
          </View>
        </View>
        <View style={styles.saveTime}>
          <View style={styles.title}>
            <Typography
              title="Save time & money with exclusive offers from top stores"
              color="#5956E9"
              fontWeight="700"
              fontSize={40}
              textAlign="center"
            />
          </View>
          <View style={styles.wrapImg2}>
            <Image resizeMode="cover" source={require('../images/Saly3.png')} />
          </View>
        </View>
        <Typography
          title="Hey! Follow us on social media so you don’t miss any offer."
          color="#000"
          fontWeight="700"
          fontSize={40}
          textAlign="center"
        />
        <View style={styles.wrapImg1}>
          <Image resizeMode="cover" source={require('../images/Saly4.png')} />
        </View>
        <View style={{paddingBottom: 20}}>
          <Typography
            title="Copywright 2021 website.com"
            color="#000000"
            fontWeight="700"
            fontSize={15}
            textAlign="center"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    marginTop: 30,
    marginBottom: 20,
  },
  img: {
    width: '100%',
    position: 'relative',
  },
  bgImg: {
    position: 'absolute',
    right: 0,
  },
  centerImg: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  wrapImg1: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  styleImg1: {
    width: '62%',
    padding: 10,
    backgroundColor: '#DCDEFE',
    borderRadius: 34,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  styleExperience: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 100,
    marginBottom: 100,
  },
  circlePink: {
    position: 'relative',
    width: 356,
    height: 356,
    borderRadius: 356,
    backgroundColor: '#FAB8C3',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imgPink: {
    position: 'absolute',
    top: -81,
  },
  products: {
    position: 'relative',
  },
  deco1: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  deco2: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  saveTime: {
    marginTop: 100,
    backgroundColor: '#FAB8C5',
    marginBottom: 100,
  },
  wrapImg2: {
    marginTop: -50,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default About;
