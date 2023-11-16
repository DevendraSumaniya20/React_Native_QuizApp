import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import ImagePath from '../../constants/ImagePath';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <Image
          style={styles.image}
          source={ImagePath.QUIZIMAGE}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.quizView}>
        <Text style={styles.quizText}>QUIZ Rules</Text>
        <View style={styles.quizInnerView}>
          <View style={styles.quizMainView}>
            <Text style={styles.dotStyle}>•</Text>
            <Text style={styles.ruleText}>
              For each correct answer you get 5 points
            </Text>
          </View>
          <View style={styles.quizMainView}>
            <Text style={styles.dotStyle}>•</Text>
            <Text style={styles.ruleText}>
              There is no negative marking for wrong answer
            </Text>
          </View>
          <View style={styles.quizMainView}>
            <Text style={styles.dotStyle}>•</Text>
            <Text style={styles.ruleText}>
              Each question has a time limit of 15 sec
            </Text>
          </View>
          <View style={styles.quizMainView}>
            <Text style={styles.dotStyle}>•</Text>
            <Text style={styles.ruleText}>
              You should answer all the questions compulsarily
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.quizTouchableOpacity}
        onPress={() => navigation.navigate(NavigationStringPath.QUIZ)}>
        <Text style={styles.startQuizText}>Start Quiz</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
