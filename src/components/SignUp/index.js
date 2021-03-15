import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Container from '../common/Container';
import styles from './styles';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import {useNavigation} from '@react-navigation/core';
import {LOGIN} from '../../constants/routeNames';
import {useState} from 'react/cjs/react.development';
import ShowHideBtn from '../common/ShowHideBtn';
import Message from '../common/Message';

const RegisterComponent = ({
  onChange,
  onSubmit,
  form,
  errors,
  loading,
  error,
}) => {
  const {navigate} = useNavigation();
  const [secureText, setSecureText] = useState(true);
  return (
    <Container>
      <SafeAreaView></SafeAreaView>
      <View>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          {error?.error && (
            <Message
              retry
              retryFn={() => {
                console.log('retryFn:>> working');
              }}
              message={error?.error}
            />
          )}
          <Input
            label="User Name"
            iconPostion="right"
            placeholder="Enter User Name"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName || error?.username?.[0]}
          />
          <Input
            label="First Name"
            iconPostion="right"
            placeholder="Enter First Name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            iconPostion="right"
            placeholder="Enter Last Name"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Email"
            iconPostion="right"
            placeholder="Enter Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email || error?.email?.[0]}
          />
          <Input
            label="Password"
            icon={
              <ShowHideBtn
                secureText={secureText}
                setSecureText={setSecureText}
              />
            }
            iconPostion="right"
            placeholder="Enter Password"
            secureTextEntry={secureText}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password || error?.password?.[0]}
          />
          <CustomButton
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
            primary
            title="Submit"
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
