import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {flex: 1},
  topcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(2),
    marginTop: hp(3),
  },
  innercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(2),
    marginHorizontal: wp(2),
  },

  yourResultText: {
    fontSize: hp(5),
    fontFamily: 'Poppins-Bold',
  },

  QuestionsAnsweredText: {
    fontSize: hp(2),
    fontFamily: 'Poppins-Bold',
  },
  option5text: {
    fontSize: hp(2),
    fontFamily: 'Poppins-Bold',
  },

  touchableOpacityView: {
    height: 'auto',
    borderRadius: 16,
    marginTop: hp(3),
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: wp(3),
  },
  scoreText: {
    fontSize: hp(4),
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginTop: hp(2),
    alignSelf: 'center',
  },
  optionsCheck: {
    textAlign: 'center',
    width: wp(10),
    padding: hp(1),
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: hp(1),
  },
  optionsClose: {
    textAlign: 'center',
    width: wp(10),
    padding: hp(1),
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: hp(1),
  },
  answerView: {
    alignItems: 'center',
    margin: hp(3),
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  questionNumberText: {
    margin: hp(2),
    fontSize: hp(2),
    fontFamily: 'Poppins-Bold',
  },
  continueTouchableView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(3.5),
    padding: hp(2.5),
    borderRadius: hp(2),
    width: wp(50),
    alignSelf: 'center',
    borderWidth: 1,
  },
  continueText: {
    fontSize: hp(3),
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});

export default styles;
