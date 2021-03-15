import {
    LOGIN_FAILED,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
  } from '../../../constants/actionType';
  import axiosInstance from '../../../helpers/axiosInterceptor';

  export default ({
    password,
    userName: username,
  }) => dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axiosInstance
      .post('auth/login', {
        password,
        username,
      })
      .then(res => {
        console.log('res.data:>> ',res.data);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAILED,
          payload: err.response ? err.response.data : {error: 'Something'},
        });
      });
  };
  