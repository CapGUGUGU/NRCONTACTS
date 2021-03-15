import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  textInput: {
    flex: 1,
    width: '100%',
  },
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    justifyContent:'center',
  },
  error: {
    color: colors.danger,
  },
  loaderSection: {
    flexDirection: 'row',
  },
});
