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
});

export default About;
