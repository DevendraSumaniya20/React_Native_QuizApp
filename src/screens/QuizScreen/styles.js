import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  quizView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },

  counterView: {
    padding: 12,
    backgroundColor: '#258',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
  },
  quizSecondView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  questionView: {
    backgroundColor: '#F0F8FF',
    marginTop: 30,
    padding: 10,
    borderRadius: 6,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  questionTopView: {
    marginTop: 12,
  },
  questionInnerView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#00FFFF',
    marginVertical: 10,
    borderRadius: 20,
  },
  optionsText: {
    borderColor: '#00FFFF',
    textAlign: 'center',
    width: 40,
    borderRadius: 20,
    padding: 10,
    borderWidth: 0.5,
  },

  optionsCheck: {
    borderColor: '#00FFFF',
    textAlign: 'center',
    width: 40,
    borderRadius: 20,
    padding: 10,
    borderWidth: 0.5,
  },
  optionsClose: {
    borderColor: '#00FFFF',
    textAlign: 'center',
    width: 40,
    borderRadius: 20,
    padding: 10,
    borderWidth: 0.5,
  },

  answerText: {
    marginLeft: 10,
  },
});

export default styles;
