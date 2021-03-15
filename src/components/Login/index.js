import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import styles from './styles';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import {useNavigation} from '@react-navigation/core';
import {REGISTER} from '../../constants/routeNames';
import ShowHideBtn from '../common/ShowHideBtn';
import Message from '../common/Message';

const LoginComponent = ({error, onChange, onSubmit, loading}) => {
  const {navigate} = useNavigation();
  const [secureText, setSecureText] = useState(true);
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login in</Text>

        <View style={styles.form}>
          {error && !error?.error && (
            <Message
              retry
              retryFn
              primary
              onDismiss
              message="invalid credentials"
            />
          )}
          {error?.error && <Message danger onDismiss message={error?.error} />}
          <Input
            label="Username"
            iconPostion="right"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            //error={'This field is required'}
          />
          <Input
            label="Password"
            icon={
              <ShowHideBtn
                secureText={secureText}
                setSecureText={setSecureText}
              />
            }
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            iconPostion="right"
            placeholder="Enter Password"
            secureTextEntry={secureText}
          />
          <CustomButton
            primary
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
            title="Submit"
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
