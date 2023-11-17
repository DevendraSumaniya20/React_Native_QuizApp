import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import questions from '../../data/questions';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {clearQuizData} from '../../store/reducerSlice/clearSlice';

const QuizScreen = () => {
  const navigation = useNavigation();

  const isDarkMode = useSelector(state => state.theme.isDarkmode);
  const data = questions;

  const totalQuestions = data.length;

  const [points, setPoints] = useState(0);

  const [index, setIndex] = useState(0);

  const [answerStatus, setAnswerStatus] = useState(null);

  const [answers, setAnswer] = useState([]);

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const [counter, setCounter] = useState(15);

  let interval = null;

  const progressPercentage = Math.floor((index / totalQuestions) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints(points => points + 10);
        setAnswerStatus(true);
        answers.push({question: index + 1, answer: true});
      } else {
        setAnswerStatus(false);
        answers.push({question: index + 1, answer: false});
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter(state => state - 1);
      }
      if (counter === 0) {
        setIndex(index + 1);
        setCounter(15);
      }
    };

    interval = setTimeout(myInterval, 1000);

    // clean up
    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      dispatch(clearQuizData());
      navigation.navigate(NavigationStringPath.RESULT, {
        answers: answers,
        points: points,
      });
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];

  const darkmodeColor = isDarkMode ? '#fff' : '#000';
  const darkborderColor = isDarkMode ? '#fff' : '#000';
  const darkbackgroundColor = isDarkMode ? '#000' : '#fff';

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: darkbackgroundColor}]}>
      <View style={[styles.quizView, {backgroundColor: darkbackgroundColor}]}>
        <Text style={[styles.quizChallangetext, {color: darkmodeColor}]}>
          Quiz Challange
        </Text>
        <TouchableOpacity
          style={[
            styles.counterView,
            {
              backgroundColor: darkbackgroundColor,
              borderColor: darkborderColor,
            },
          ]}>
          <Text style={[styles.counterText, {color: darkmodeColor}]}>
            {counter}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[styles.quizSecondView, {backgroundColor: darkbackgroundColor}]}>
        <Text style={[styles.yourProcessText, {color: darkmodeColor}]}>
          Your Progress
        </Text>
        <Text style={[styles.questionanswertext, {color: darkmodeColor}]}>
          ({index}/{totalQuestions}) questions answered
        </Text>
      </View>

      {/* Progress Bar */}

      <View style={styles.progressBarView}>
        <Text
          style={{
            backgroundColor: isDarkMode ? '#fff' : '#000',
            borderRadius: 10,
            position: 'absolute',
            left: heightPercentageToDP(0),
            height: heightPercentageToDP(1),
            right: heightPercentageToDP(0),
            width: `${progressPercentage}%`,
            marginTop: heightPercentageToDP(2),
          }}
        />
      </View>

      <View
        style={[
          styles.questionView,
          {backgroundColor: darkbackgroundColor, borderColor: darkborderColor},
        ]}>
        <Text style={[styles.questionText, {color: darkmodeColor}]}>
          {currentQuestion?.question}
        </Text>
        <View style={[styles.questionTopView]}>
          {currentQuestion?.options?.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                selectedAnswerIndex == null && setSelectedAnswerIndex(index);
              }}
              key={index}
              style={
                selectedAnswerIndex === index &&
                index === currentQuestion.correctAnswerIndex
                  ? {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: darkborderColor,
                      marginVertical: heightPercentageToDP(1),
                      backgroundColor: 'green',
                      borderRadius: 20,
                    }
                  : selectedAnswerIndex !== null &&
                    selectedAnswerIndex === index
                  ? {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: darkborderColor,
                      marginVertical: heightPercentageToDP(1),
                      backgroundColor: 'red',
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: darkborderColor,
                      marginVertical: heightPercentageToDP(1),
                      borderRadius: 20,
                    }
              }>
              {selectedAnswerIndex === index &&
              index === currentQuestion?.correctAnswerIndex ? (
                <AntDesign
                  style={styles.optionsCheck}
                  name="check"
                  size={20}
                  color="white"
                />
              ) : selectedAnswerIndex != null &&
                selectedAnswerIndex === index ? (
                <AntDesign
                  style={styles.optionsClose}
                  name="close"
                  size={20}
                  color="white"
                />
              ) : (
                <Text
                  style={[
                    styles.optionsText,
                    {color: darkmodeColor, borderColor: darkborderColor},
                  ]}>
                  {item.options}
                </Text>
              )}

              <Text style={[styles.answerText, {color: darkmodeColor}]}>
                {item.answer}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View
        style={
          answerStatus === null
            ? null
            : [styles.answerLastView, {backgroundColor: darkbackgroundColor}]
        }>
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus === null
                ? null
                : [styles.answerLastStatusText, {color: darkmodeColor}]
            }>
            {!!answerStatus
              ? 'Your Answer is correct ✅'
              : 'Your Answer is incorrect ❌'}
          </Text>
        )}

        {index + 1 >= questions.length ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationStringPath.RESULT, {
                points: points,

                answers: answers,
              })
            }
            style={[
              styles.nextQuestionTouchble,
              {
                backgroundColor: darkbackgroundColor,
                borderColor: darkborderColor,
              },
            ]}>
            <Text style={[styles.doneText, {color: darkmodeColor}]}>Done</Text>
          </TouchableOpacity>
        ) : answerStatus === null ? null : (
          <TouchableOpacity
            onPress={() => setIndex(index + 1)}
            style={[
              styles.nextQuestionTouchble,
              {
                backgroundColor: darkbackgroundColor,
                borderColor: darkborderColor,
              },
            ]}>
            <Text style={[styles.nextQuestionText, {color: darkmodeColor}]}>
              Next Question
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;
