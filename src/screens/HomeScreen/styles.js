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
    justifyContent: 'flex-end',
  },

  buttonText: {
    fontSize: hp(2),
    marginLeft: 10,
    fontFamily: 'Poppins-Bold',
  },

  image: {
    height: hp(45),
    width: 'auto',
    borderRadius: 30,
    marginHorizontal: hp(1),
  },
  quizView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: hp(1),
  },
  quizText: {
    fontSize: hp(3),
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  quizInnerView: {
    marginTop: hp(1),
    padding: hp(0.4),
  },
  quizMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(0.9),
  },
  dotStyle: {
    marginRight: wp(1),
    fontSize: hp(2),
    alignItems: 'center',
  },
  ruleText: {
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Medium',
  },
  quizTouchableOpacity: {
    padding: hp(2.2),
    borderRadius: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: hp(1.5),
    borderWidth: 1.5,
  },
  startQuizText: {
    fontSize: hp(2.5),
    fontFamily: 'Poppins-Bold',
  },
});

export default styles;
