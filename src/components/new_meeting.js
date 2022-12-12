/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Alert,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import SizedBox from './SizedBox';

import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
// Modules

function useStyles() {
  return StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: 'rgb(93, 95, 222)',
      borderRadius: 8,
      height: 48,
      justifyContent: 'center',
    },
    buttonTitle: {
      color: '#FFFFFF',
      fontSize: 17,
      fontWeight: '600',
      lineHeight: 22,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
      paddingVertical: 32,
    },
    forgotPasswordContainer: {
      alignItems: 'flex-end',
    },
    newAccountContainer: {
      alignItems: 'flex-end',
    },
    form: {
      alignItems: 'center',
      backgroundColor: 'rgb(58, 58, 60)',
      borderRadius: 8,
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: 16,
    },
    label: {
      color: 'rgba(235, 235, 245, 0.6)',
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
      width: 80,
    },
    root: {
      backgroundColor: '#000000',
      flex: 1,
    },
    safeAreaView: {
      flex: 1,
    },
    subtitle: {
      color: 'rgba(235, 235, 245, 0.6)',
      fontSize: 17,
      fontWeight: '400',
      lineHeight: 22,
    },
    textButton: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
    },
    textInput: {
      color: '#FFFFFF',
      flex: 1,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 28,
      fontWeight: '700',
      lineHeight: 34,
    },
  });
}

const NewMeeting: React = () => {
  const emailInput = React.useRef<TextInput>(null);
  const passwordInput = React.useRef<TextInput>(null);

  const {control, handleSubmit} = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(({email, password}) => {
    Alert('navigate to 3d scene');
  });

  const navigation = useNavigation();

  const styles = useStyles();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <SafeAreaView style={styles.safeAreaView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.content}>
            <Text style={styles.title}>MetaComp</Text>

            <SizedBox height={8} />

            <Text style={styles.subtitle}>User1</Text>

            <SizedBox height={64} />

            <Pressable onPress={() => emailInput.current?.focus()}>
              <View style={styles.form}>
                <Text style={styles.label}>Meeting Name</Text>

                <Controller
                  control={control}
                  name="email"
                  render={({onBlur, onChange}) => (
                    <TextInput
                      autoCapitalize="none"
                      autoCompleteType="email"
                      autoCorrect={false}
                      keyboardType="email-address"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      onSubmitEditing={() => passwordInput.current?.focus()}
                      ref={emailInput}
                      returnKeyType="next"
                      style={styles.textInput}
                      textContentType="username"
                      value="Metacomp"
                    />
                  )}
                />
              </View>
            </Pressable>


            <SizedBox height={16} />

            <Pressable onPress={() => emailInput.current?.focus()}>
              <View style={styles.form}>
                <Text style={styles.label}>Date</Text>

                <Controller
                  control={control}
                  name="email"
                  render={({onBlur, onChange}) => (
                    <TextInput
                      autoCapitalize="none"
                      autoCompleteType="email"
                      autoCorrect={false}
                      keyboardType="email-address"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      onSubmitEditing={() => passwordInput.current?.focus()}
                      ref={emailInput}
                      returnKeyType="next"
                      style={styles.textInput}
                      textContentType="username"
                      value="08/12/2020"
                    />
                  )}
                />
              </View>
            </Pressable>

            <SizedBox height={16} />

            <Pressable onPress={() => emailInput.current?.focus()}>
              <View style={styles.form}>
                <Text style={styles.label}>Time</Text>

                <Controller
                  control={control}
                  name="email"
                  render={({onBlur, onChange, value}) => (
                    <TextInput
                      autoCapitalize="none"
                      autoCompleteType="email"
                      autoCorrect={false}
                      keyboardType="email-address"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      onSubmitEditing={() => passwordInput.current?.focus()}
                      ref={emailInput}
                      returnKeyType="next"
                      style={styles.textInput}
                      textContentType="username"
                      value="10:30 AM"
                    />
                  )}
                />
              </View>
            </Pressable>

            <SizedBox height={16}></SizedBox>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Events');
              }}>
              <View style={styles.button}>
                <Text style={styles.buttonTitle} onPress={onSubmit}>
                  Schedule Meeting
                </Text>
              </View>
            </TouchableOpacity>

            <SizedBox height={16}></SizedBox>

            <TouchableOpacity
              onPress={() => {
                Alert.alert('https://metacomp/invite/10002');
              }}>
              <View style={styles.button}>
                <Text style={styles.buttonTitle}>
                  Generating Invitation link
                </Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewMeeting;
