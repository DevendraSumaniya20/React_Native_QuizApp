import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {flex: 1},
  subcontainer: {margin: hp(0.4)},
  darkModeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp(1),
    borderRadius: hp(1.5),
    marginBottom: hp(3),
    justifyContent: 'flex-end',
  },

  buttonText: {
    fontSize: hp(2.5),
    marginLeft: 10,
  },

  image: {
    height: 375,
    width: '100%',
    borderRadius: 50,
  },
  quizView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(2),
    borderWidth: 0.5,
    marginHorizontal: wp(1),
    borderRadius: 10,
  },
  quizText: {
    fontSize: hp(2.6),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  quizInnerView: {
    borderRadius: 10,
    marginTop: hp(1.5),
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
    padding: hp(2.4),
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: hp(1.5),
    borderWidth: 1.5,
    backgroundColor: '#A9CFF5',
  },
  startQuizText: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
