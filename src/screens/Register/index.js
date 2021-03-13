import React from 'react';
import {Text, View} from 'react-native';
import {useState} from 'react/cjs/react.development';
import RegisterComponent from '../../components/SignUp';
import env from '../../config/env';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const BACKEND_URL = env;
  console.log('BACKEND:>> ', BACKEND_URL);
  console.log('__DEV__:>> ', __DEV__);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'password' && value.length < 6) {
        setErrors((prev) => {
          return {...prev, [name]: 'Password need min 6 characters'};
        });
      } else {
        setErrors((prev) => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors((prev) => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErrors((prev) => {
        return {...prev, userName: 'Please add Username'};
      });
    }
    if (!form.firstName) {
      setErrors((prev) => {
        return {...prev, firstName: 'Please add First Name'};
      });
    }
    if (!form.lastName) {
      setErrors((prev) => {
        return {...prev, lastName: 'Please add Last Name'};
      });
    }
    if (!form.email) {
      setErrors((prev) => {
        return {...prev, email: 'Please add Email'};
      });
    }
    if (!form.password) {
      setErrors((prev) => {
        return {...prev, password: 'Please add Password'};
      });
    }
  };
  return (
    <RegisterComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      errors={errors}
    />
  );
};

export default Register;
