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
import Dialog from 'react-native-dialog';
import Modal from 'react-native-modal';
// Modules
import {Controller, useForm} from 'react-hook-form';

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

const ResetPage: React = () => {
  const navigation = useNavigation();

  const styles = useStyles();

  const emailInput = React.useRef<TextInput>(null);
  const passwordInput = React.useRef<TextInput>(null);

  const {control, handleSubmit} = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [dialogVisible, setDialogVisible] = useState(false);

  const showDialog = () => {
    setDialogVisible(true);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };

  const handleDelete = () => {
    setDialogVisible(false);
  };

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

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('NewMeeting');
              }}>
              <View style={styles.button}>
                <Text style={styles.buttonTitle}>Create New Meeting</Text>
              </View>
            </TouchableOpacity>

            <SizedBox height={16} />

            <View style={styles.container}>
              <TouchableOpacity onPress={showDialog}>
                <View style={styles.button}>
                  <Text style={styles.buttonTitle}>Join Meeting</Text>
                </View>
              </TouchableOpacity>
              <Dialog.Container visible={dialogVisible}>
                <Dialog.Title>Enter the Link</Dialog.Title>
                <Pressable onPress={() => emailInput.current?.focus()}>
                  <View style={styles.form}>
                    <Text style={styles.label}>link</Text>

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
                          value={value}
                        />
                      )}
                    />
                  </View>
                </Pressable>
                <Dialog.Button label="Cancel" onPress={handleCancel} />
                <Dialog.Button label="Submit" onPress={handleDelete} />
              </Dialog.Container>
            </View>

            <SizedBox height={16} />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EventsManagement');
              }}>
              <View style={styles.button}>
                <Text style={styles.buttonTitle}>
                  Meeting Events Management
                </Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResetPage;
