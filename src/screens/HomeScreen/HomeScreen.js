import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import ImagePath from '../../constants/ImagePath';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../../store/reducerSlice/themeSlice';
import {clearQuizData} from '../../store/reducerSlice/clearSlice';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  const navigation = useNavigation();

  const isDarkMode = useSelector(state => state.theme.isDarkmode);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  const darkmodeColor = isDarkMode ? '#fff' : '#000';
  const darkborderColor = isDarkMode ? '#fff' : '#000';
  const darkbackgroundColor = isDarkMode ? '#000' : '#fff';

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: darkbackgroundColor}]}>
      <TouchableOpacity style={styles.darkModeButton} onPress={handleToggle}>
        <MaterialIcons
          name={isDarkMode ? 'light-mode' : 'dark-mode'}
          size={24}
          color={darkmodeColor}
        />
        <Text style={[styles.buttonText, {color: darkmodeColor}]}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Text>
      </TouchableOpacity>

      <View style={styles.subcontainer}>
        <Image
          style={styles.image}
          source={ImagePath.QUIZIMAGE}
          resizeMode="stretch"
        />
      </View>

      <View style={[styles.quizView, {borderColor: darkborderColor}]}>
        <Text style={[styles.quizText, {color: darkmodeColor}]}>
          QUIZ Rules
        </Text>
        <View
          style={[
            styles.quizInnerView,
            {backgroundColor: darkbackgroundColor},
          ]}>
          <View
            style={[
              styles.quizMainView,
              {backgroundColor: darkbackgroundColor},
            ]}>
            <Text style={[styles.dotStyle, {color: darkmodeColor}]}>•</Text>
            <Text style={[styles.ruleText, {color: darkmodeColor}]}>
              For each correct answer you get 5 points
            </Text>
          </View>

          <View
            style={[
              styles.quizMainView,
              {backgroundColor: darkbackgroundColor},
            ]}>
            <Text style={[styles.dotStyle, {color: darkmodeColor}]}>•</Text>
            <Text style={[styles.ruleText, {color: darkmodeColor}]}>
              There is no negative marking for wrong answer
            </Text>
          </View>
          <View
            style={[
              styles.quizMainView,
              {backgroundColor: darkbackgroundColor},
            ]}>
            <Text style={[styles.dotStyle, {color: darkmodeColor}]}>•</Text>
            <Text style={[styles.ruleText, {color: darkmodeColor}]}>
              Each question has a time limit of 15 sec
            </Text>
          </View>
          <View
            style={[
              styles.quizMainView,
              {backgroundColor: darkbackgroundColor},
            ]}>
            <Text style={[styles.dotStyle, {color: darkmodeColor}]}>•</Text>
            <Text style={[styles.ruleText, {color: darkmodeColor}]}>
              You should answer all the questions compulsarily
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.quizTouchableOpacity,
          {
            borderColor: darkborderColor,
            backgroundColor: darkbackgroundColor,
          },
        ]}
        onPress={() => {
          dispatch(clearQuizData());
          navigation.navigate(NavigationStringPath.QUIZ);
        }}>
        <Text style={[styles.startQuizText, {color: darkmodeColor}]}>
          Start Quiz
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
