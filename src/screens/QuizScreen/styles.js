import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {flex: 1},

  quizView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: hp(1.2),
    marginHorizontal: hp(1),
  },
  quizChallangetext: {
    fontSize: hp(3),
    fontFamily: 'Poppins-Bold',
  },

  counterView: {
    padding: hp(1.5),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  counterText: {
    textAlign: 'center',
    fontSize: hp(2.5),
    fontFamily: 'Poppins-Bold',
  },
  quizSecondView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: hp(2),
  },
  yourProcessText: {
    fontSize: hp(2),
    fontFamily: 'Poppins-Bold',
  },
  questionanswertext: {
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Bold',
  },

  progressBarView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(1.5),
    borderRadius: 50,
    justifyContent: 'center',
    marginTop: hp(1.5),
    borderWidth: 1,
    marginHorizontal: hp(2),
  },

  progressBarText: {
    borderRadius: 10,
    position: 'absolute',
    left: hp(0),
    height: hp(1),
    right: hp(0),
    marginTop: hp(2),
  },

  questionView: {
    marginTop: hp(3.5),
    padding: hp(2),
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: wp(4),
  },
  questionText: {
    fontSize: hp(2.4),
    fontFamily: 'Poppins-Bold',
  },
  questionTopView: {
    marginTop: hp(2),
  },

  optionsText: {
    textAlign: 'center',
    width: wp(10),
    borderRadius: 10,
    padding: hp(1.5),
    fontFamily: 'Poppins-Medium',
  },

  optionsCheck: {
    textAlign: 'center',
    width: wp(10),
    borderRadius: 20,
    padding: hp(1.5),
  },
  optionsClose: {
    textAlign: 'center',
    width: wp(10),
    borderRadius: 20,
    padding: hp(1.5),
  },

  answerText: {
    marginLeft: hp(1.4),
    fontFamily: 'Poppins-Bold',
  },
  answerLastView: {
    marginTop: hp(10),
    padding: hp(2),
    borderRadius: 10,
    height: hp(50),
  },
  answerLastStatusText: {
    fontSize: hp(2.5),
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  nextQuestionTouchble: {
    padding: hp(1),
    marginTop: hp(2),
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: wp(4),
  },
  nextQuestionText: {
    textAlign: 'center',
    fontSize: hp(3),
    fontFamily: 'Poppins-Bold',
  },
  doneText: {
    textAlign: 'center',
    fontSize: hp(3),
    fontFamily: 'Poppins-Bold',
  },
});

export default styles;
