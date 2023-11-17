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
  },
  quizChallangetext: {
    fontSize: hp(2.5),
    fontWeight: '600',
  },

  counterView: {
    padding: hp(1),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    textAlign: 'center',
    fontSize: hp(2.5),
    fontWeight: '700',
  },
  quizSecondView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(2),
  },
  yourProcessText: {
    fontSize: hp(1.7),
    fontWeight: '400',
  },
  questionanswertext: {
    fontSize: hp(1.7),
    fontWeight: '400',
  },

  progressBarView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(1),
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: hp(1.5),
    borderWidth: 1,
    marginHorizontal: wp(3),
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
    marginHorizontal: wp(2),
  },
  questionText: {
    fontSize: hp(2.4),
    fontWeight: 'bold',
  },
  questionTopView: {
    marginTop: hp(2),
  },

  optionsText: {
    textAlign: 'center',
    width: wp(10),
    borderRadius: 10,
    padding: hp(1.5),
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
    fontWeight: 'bold',
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
    fontWeight: '600',
    textAlign: 'center',
    fontSize: hp(3),
  },
  doneText: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: hp(3),
  },
});

export default styles;
