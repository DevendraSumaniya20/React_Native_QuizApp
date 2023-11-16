import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import questions from '../../data/questions';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';

import AntDesign from 'react-native-vector-icons/AntDesign';

const QuizScreen = () => {
  const navigation = useNavigation();

  const data = questions;

  const totalQuestions = data.length;

  const [points, setPoints] = useState(0);

  const [index, setIndex] = useState(0);

  const [answerStatus, setAnswerStatus] = useState(null);

  const [answers, setAnswer] = useState([]);

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const [counter, setCounter] = useState(15);

  let interval = null;

  const progesPercentage = Math.floor((index / totalQuestions) * 100);

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

  // useEffect(() => {
  //   const myInterval = () => {
  //     if (counter >= 1) {
  //       setCounter(state => state - 1);
  //     }
  //     if (counter === 0) {
  //       setIndex(index + 1);
  //       setCounter(15);
  //     }
  //   };

  //   interval = setTimeout(myInterval, 1000);

  //   // clean up
  //   return () => {
  //     clearTimeout(interval);
  //   };
  // }, [counter]);

  // useEffect(() => {
  //   if (index + 1 > data.length) {
  //     navigation.navigate(NavigationStringPath.RESULT, {
  //       answers: answers,
  //       points: points,
  //     });
  //   }
  // }, [currentQuestion]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];

  return (
    <SafeAreaView>
      <View style={styles.quizView}>
        <Text>Quiz Challange</Text>
        {/* <TouchableOpacity style={styles.counterView}>
          <Text style={styles.counterText}> {counter}</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.quizSecondView}>
        <Text>Your Progress</Text>
        <Text>
          ({index}/{totalQuestions}) questions answered
        </Text>
      </View>

      {/* Progress Bar */}

      <View style={styles.questionView}>
        <Text style={styles.questionText}>{currentQuestion?.question}</Text>
        <View style={styles.questionTopView}>
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
                      borderWidth: 0.5,
                      borderColor: '#00FFFF',
                      marginVertical: 10,
                      backgroundColor: 'green',
                      borderRadius: 20,
                    }
                  : selectedAnswerIndex !== null &&
                    selectedAnswerIndex === index
                  ? {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 0.5,
                      borderColor: '#00FFFF',
                      marginVertical: 10,
                      backgroundColor: 'red',
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 0.5,
                      borderColor: '#00FFFF',
                      marginVertical: 10,
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
                <Text style={styles.optionsText}>{item.options}</Text>
              )}

              <Text style={styles.answerText}>{item.answer}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View
        style={
          answerStatus === null
            ? null
            : {
                marginTop: 45,
                backgroundColor: '#452362',
                padding: 10,
                borderRadius: 10,
                height: 120,
              }
        }>
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus === null
                ? null
                : {fontSize: 17, textAlign: 'center', fontWeight: 'bold'}
            }>
            {!!answerStatus ? 'correct answer' : 'Wrong answer'}
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
            style={{
              backgroundColor: 'green',
              padding: 10,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 20,
              borderRadius: 6,
            }}>
            <Text style={{color: 'white'}}>Done</Text>
          </TouchableOpacity>
        ) : answerStatus === null ? null : (
          <TouchableOpacity
            onPress={() => setIndex(index + 1)}
            style={{
              backgroundColor: 'green',
              padding: 10,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 20,
              borderRadius: 6,
            }}>
            <Text style={{color: 'white'}}>Next Question</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;
