import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {flex: 1},
  subcontainer: {margin: hp(0.4)},

  image: {
    height: 375,
    width: '100%',
    borderRadius: 50,
  },
  quizView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  quizText: {
    fontSize: hp(3),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  quizInnerView: {
    padding: hp(2),
    backgroundColor: '#f88888',
    borderRadius: 10,
    marginTop: hp(2),
    padding: Platform.OS === 'android' ? hp(2.9) : hp(1.5),
  },
  quizMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  dotStyle: {
    color: 'white',
    marginRight: wp(1),
    fontSize: hp(2),
  },
  ruleText: {
    color: '#220235',
    fontFamily: 'Helvetica',
    fontWeight: '900',
    fontSize: hp(2),
  },
  quizTouchableOpacity: {
    backgroundColor: '#258888',
    padding: hp(3),
    borderRadius: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: hp(2),
  },
  startQuizText: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
