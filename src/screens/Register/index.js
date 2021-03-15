import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useContext} from 'react';
import {useState} from 'react/cjs/react.development';
import RegisterComponent from '../../components/SignUp';
import {LOGIN} from '../../constants/routeNames';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';

const Register = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, data, loading},
  } = useContext(GlobalContext);

  React.useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password' && value.length < 6) {
        setErrors(prev => {
          return {...prev, [name]: 'Password need min 6 characters'};
        });
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add Username'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add First Name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add Last Name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add Email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add Password'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch);
    }
  };
  return (
    <RegisterComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
