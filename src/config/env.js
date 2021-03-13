import Config from 'react-native-config';

const devEnvironmentVariables = Config.DEV_BACKEND_URL;

const prodEnvironmentVariables = Config.PROD_BACKEND_URL;

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
