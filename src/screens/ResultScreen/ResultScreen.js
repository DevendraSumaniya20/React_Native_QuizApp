import {
  Alert,
  FlatList,
  Platform,
  SafeAreaView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import NavigationStringPath from '../../constants/NavigationStringPath';
import {useDispatch, useSelector} from 'react-redux';
import {clearQuizData} from '../../store/reducerSlice/clearSlice';

const ResultScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const isDarkMode = useSelector(state => state.theme.isDarkmode);

  const darkmodeColor = isDarkMode ? '#fff' : '#000';
  const darkborderColor = isDarkMode ? '#fff' : '#000';
  const darkbackgroundColor = isDarkMode ? '#000' : '#fff';

  const renderItem = ({item, i}) => {
    return (
      <View style={[styles.answerView, {backgroundColor: darkbackgroundColor}]}>
        <Text style={[styles.questionNumberText, {color: darkmodeColor}]}>
          {item.question}.
        </Text>
        {item.answer === true ? (
          <AntDesign
            style={[
              styles.optionsCheck,
              {borderColor: darkmodeColor, overflow: 'hidden'},
            ]}
            name="check"
            size={22}
            color="white"
          />
        ) : (
          <AntDesign
            style={[
              styles.optionsClose,
              {borderColor: darkmodeColor, overflow: 'hidden'},
            ]}
            name="close"
            size={22}
            color="white"
          />
        )}
      </View>
    );
  };

  const gotoFirstScreen = () => {
    Alert.alert(
      'Are you sure you want to go to the Quiz screen also the new game will be started?',
      'Press OK to proceed or Cancel to stay on this screen.',
      [
        {
          text: 'Cancel',
          onPress: () => {
            dispatch(clearQuizData());
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(clearQuizData());
            navigation.navigate(NavigationStringPath.HOME);
          },
        },
      ],
      {cancelable: false},
    );
  };

  const onShared = async () => {
    try {
      const result = await Share.share({
        message: 'Try this app for check your knowledge ',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismiss');
      }
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: darkbackgroundColor}]}>
      <View
        style={[styles.topcontainer, {backgroundColor: darkbackgroundColor}]}>
        <Text style={[styles.yourResultText, {color: darkmodeColor}]}>
          Your result
        </Text>
        <View style={styles.innercontainer}>
          <TouchableOpacity
            onPress={() => {
              onShared();
            }}>
            <Feather name="share" size={30} color={darkmodeColor} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.resultcontainer}>
        <Text style={[styles.QuestionsAnsweredText, {color: darkmodeColor}]}>
          Questions Answered
        </Text>
        <Text style={[styles.option5text, {color: darkmodeColor}]}>(5/5)</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.touchableOpacityView,
          {backgroundColor: darkbackgroundColor, borderColor: darkborderColor},
        ]}>
        <Text style={[styles.scoreText, {color: darkmodeColor}]}>
          Total Score
        </Text>
        <FlatList
          numColumns={2}
          data={route?.params?.answers}
          renderItem={renderItem}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.continueTouchableView,
          {backgroundColor: darkbackgroundColor, borderColor: darkborderColor},
        ]}
        onPress={() => {
          gotoFirstScreen();
        }}>
        <Text style={[styles.continueText, {color: darkmodeColor}]}>
          Continue
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ResultScreen;
