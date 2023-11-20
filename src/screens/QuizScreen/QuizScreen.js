import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import questions from '../../data/questions';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {clearQuizData} from '../../store/reducerSlice/clearSlice';
import * as Animatable from 'react-native-animatable';

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

  const [animationIndices, setAnimationIndices] = useState([]);

  let interval = null;
  const AnimatedTouchableOpacity =
    Animatable.createAnimatableComponent(TouchableOpacity);

  const progressPercentage = Math.floor((index / totalQuestions) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      let updatedAnimationIndices = [...animationIndices];

      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints(points => points + 10);
        setAnswerStatus(true);

        answers.push({question: index + 1, answer: true});
        updatedAnimationIndices.push(selectedAnswerIndex);
      } else {
        setAnswerStatus(false);
        answers.push({question: index + 1, answer: false});
        updatedAnimationIndices.push(selectedAnswerIndex);
      }
      setAnimationIndices(updatedAnimationIndices);
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

      <View
        style={[
          styles.progressBarView,
          {backgroundColor: darkbackgroundColor, borderColor: darkborderColor},
        ]}>
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
          {currentQuestion?.options?.map((item, optionIndex) => (
            <Animatable.View
              key={optionIndex}
              animation={
                selectedAnswerIndex === optionIndex
                  ? currentQuestion.correctAnswerIndex === optionIndex
                    ? 'zoomIn'
                    : 'shake'
                  : null
              }
              onAnimationEnd={() => {
                const updatedAnimationIndices = animationIndices.filter(
                  i => i !== optionIndex,
                );
                setAnimationIndices(updatedAnimationIndices);
              }}>
              <TouchableOpacity
                onPress={() => {
                  selectedAnswerIndex == null &&
                    setSelectedAnswerIndex(optionIndex);
                }}
                key={optionIndex}
                style={
                  selectedAnswerIndex === optionIndex &&
                  optionIndex === currentQuestion.correctAnswerIndex
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
                      selectedAnswerIndex === optionIndex
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
                {selectedAnswerIndex === optionIndex &&
                optionIndex === currentQuestion?.correctAnswerIndex ? (
                  <AntDesign
                    style={styles.optionsCheck}
                    name="check"
                    size={20}
                    color="white"
                  />
                ) : selectedAnswerIndex != null &&
                  selectedAnswerIndex === optionIndex ? (
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
            </Animatable.View>
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
            {!!answerStatus ? (
              <View>
                <View style={styles.answerCorrectView}>
                  <Text
                    style={[styles.correctAnswerText, {color: darkmodeColor}]}>
                    Your answer is correct
                  </Text>
                  <AntDesign
                    style={styles.optionsCheck}
                    name="check"
                    size={35}
                    color="green"
                  />
                </View>
              </View>
            ) : (
              <View style={styles.answerCorrectView}>
                <Text
                  style={[styles.correctAnswerText, {color: darkmodeColor}]}>
                  Your answer is incorrect
                </Text>
                <AntDesign
                  style={styles.optionsClose}
                  name="close"
                  size={35}
                  color="red"
                />
              </View>
            )}
          </Text>
        )}

        {index + 1 >= questions.length && answerStatus !== null ? (
          <Animatable.View animation="zoomIn" delay={500}>
            <AnimatedTouchableOpacity
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
              <Text style={[styles.doneText, {color: darkmodeColor}]}>
                Done
              </Text>
            </AnimatedTouchableOpacity>
          </Animatable.View>
        ) : answerStatus === null ? null : (
          <Animatable.View animation="zoomIn" delay={500}>
            <AnimatedTouchableOpacity
              onPress={() => {
                setIndex(index + 1);

                this.zoomInRef && this.zoomInRef.zoomIn();
              }}
              style={[
                styles.nextQuestionTouchble,
                {
                  backgroundColor: darkbackgroundColor,
                  borderColor: darkborderColor,
                },
              ]}
              ref={ref => {
                this.zoomInRef = ref;
              }}>
              <Text style={[styles.nextQuestionText, {color: darkmodeColor}]}>
                Next Question
              </Text>
            </AnimatedTouchableOpacity>
          </Animatable.View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;
